'use cilent'

import React, { useState , useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { FoodState , searchInputState } from '@/recoil/atoms';
import { Food , searchInfo} from '@/types/FoodType';

import styles from '@/styles/FoodList.module.scss'

export default function FoodList() {
  
    const [ FoodListCount , setFoodListCount ] = useState(20);
    const [ foodList , setFoodList ] = useState<Food[]>([]);

    const foodData:Food[] = useRecoilValue(FoodState);
    const searchInfo:searchInfo = useRecoilValue(searchInputState);

    useEffect(()=>{
        setFoodList(foodData.slice(0,FoodListCount));
    },[foodData])

    useEffect(()=>{
        console.log(searchInfo);
        if (searchInfo) {
            const car:string | undefined | number= searchInfo.car;
            const pro:string | undefined | number = searchInfo.pro;
            const fat:string | undefined | number = searchInfo.fat;

            if(Number(car) === 0){
                if(car === '') return
                return alert('탄수화물은 1~100사이의 정수를 입력해 주세요.')
            }
            if(Number(pro) === 0){
                if(pro === '') return
                return alert('단백질은 1~100사이의 정수를 입력해 주세요.')
            }
            if(Number(fat) === 0){
                if(fat === '') return
                return alert('지방은 1~100사이의 정수를 입력해 주세요.')
            }

            const filteredFoodList = foodData.filter((el) =>{
                el.RCP_NM?.includes(searchInfo.name) &&
                (+el.INFO_CAR > Number(car)-1 && +el.INFO_CAR < Number(car)+1) &&
                (+el.INFO_PRO > Number(pro)-1 && +el.INFO_PRO < Number(pro)+1) &&
                (+el.INFO_FAT > Number(fat)-1 && +el.INFO_FAT < Number(fat)+1) 
            });
            console.log(filteredFoodList);
            setFoodList(filteredFoodList);
        } else {
            setFoodList(foodData.slice(0, FoodListCount));
        }
    },[searchInfo])


    return (
        <section className={styles.FoodSection}>
            <h2 className="hidden">음식 리스트 목록</h2>
            <ul className={styles.FoodList}>
                {
                foodList &&
                foodList.map((el,i) => {
                    return(
                        <li key={i} className={styles.FoodItem}>
                            <div className={styles.FoodImgDiv}>
                                <img src={el.ATT_FILE_NO_MAIN} alt={el.RCP_NM} />
                            </div>
                            <dl className={styles.FoodInfo}>
                                <dt>{el.RCP_NM}</dt>
                                <dd>
                                    <ul>
                                        <li>탄수화물 {el.INFO_CAR}g</li>
                                        <li>단백질 {el.INFO_PRO}g</li>
                                        <li>지방 {el.INFO_FAT}g</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                    )
                })
                }
            </ul>
        </section>
    )
}
