'use cilent'

import Link from 'next/link';
import React, { useState , useEffect , useCallback } from 'react';
import { useRecoilValue , useRecoilState } from 'recoil';
import { FoodState , searchInputState , FoodRecipe } from '@/recoil/atoms';
import { Food , searchInfo} from '@/types/FoodType';

import styles from '@/styles/containers/foodList/FoodList.module.scss'

export default function FoodList() {
  
    const [ FoodListCount , setFoodListCount ] = useState(20);
    const [ foodList , setFoodList ] = useState<Food[]>([]);

    const foodData:Food[] = useRecoilValue(FoodState);
    const searchInfo:searchInfo = useRecoilValue(searchInputState);

    useEffect(()=>{
        setFoodList(foodData.slice(0,FoodListCount));
    },[foodData])

    useEffect(()=>{
        if (searchInfo) {
            const car:string | undefined | number= searchInfo.car;
            const pro:string | undefined | number = searchInfo.pro;
            const fat:string | undefined | number = searchInfo.fat;

            const filteredFoodList = foodData.filter((el) =>{
                return el.RCP_NM?.includes(searchInfo.name)  &&
                (car !== '0' ? (+el.INFO_CAR > Number(car) - 1 && +el.INFO_CAR < Number(car) + 1) : true) &&
                (pro !== '0' ? (+el.INFO_PRO > Number(pro) - 1 && +el.INFO_PRO < Number(pro) + 1) : true) &&
                (fat !== '0' ? (+el.INFO_FAT > Number(fat) - 1 && +el.INFO_FAT < Number(fat) + 1) : true);
            });

            setFoodListCount(20);
            setFoodList(filteredFoodList);
        }
    },[searchInfo])

    const loadMoreData = ():void=> {
        setFoodListCount((prevCount) => prevCount + 20);
    };

    useEffect(() => {
        const InfinityScroll = ():void => {
          const scrollY:number = window.scrollY; 
          const windowHeight:number = window.innerHeight; 
          const documentHeight:number = document.documentElement.scrollHeight;
      
          if (scrollY + windowHeight >= documentHeight-1) {
            loadMoreData();
          }
        };
      
        window.addEventListener('scroll', InfinityScroll);
      
        return () => {
          window.removeEventListener('scroll', InfinityScroll);
        };
      }, []);

    const [ Foodrecipe , setFoodRecipe ] = useRecoilState<Food>(FoodRecipe);

    return (
        <section className={styles.FoodSection}>
            <h2 className="hidden">음식 리스트 목록</h2>
            <ul className={styles.FoodList}>
                {
                    foodList && foodList.length !== 0
                    ?
                    foodList.slice(0,FoodListCount).map((el,i) => {
                        return(
                            <li key={i} className={styles.FoodItem} onClick={()=>setFoodRecipe(el)}>
                                <Link href={'/FoodItem'}>
                                    <div className={styles.FoodImgDiv}>
                                        <img src={el.ATT_FILE_NO_MAIN} alt={el.RCP_NM} />
                                    </div>
                                    <dl className={styles.FoodInfo}>
                                        <dt>{el.RCP_NM}</dt>
                                        <dd className={styles.FoodMaterial}>{el.RCP_PARTS_DTLS}</dd>
                                        <dd className={styles.FoodInfoList}>
                                            <ul>
                                                <li>탄수화물 {el.INFO_CAR}g</li>
                                                <li>단백질 {el.INFO_PRO}g</li>
                                                <li>지방 {el.INFO_FAT}g</li>
                                            </ul>
                                        </dd>
                                    </dl>
                                </Link>
                            </li>
                        )
                    })
                    :
                    <li className={styles.NoFoodItem}>검색된 음식이 없습니다.</li>
                }
            </ul>
        </section>
    )
}
