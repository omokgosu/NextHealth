'use cilent'

import React, { useState , useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { FoodState } from '@/recoil/atoms';
import { Food } from '@/types/FoodType';

import styles from '@/styles/FoodList.module.scss'

export default function FoodList() {
  
    const [ FoodListCount , setFoodListCount ] = useState(20);
    const foodData:Food[] = useRecoilValue(FoodState);
    useEffect(()=>{
        console.log(foodData);
        console.log(FoodState);
    },[foodData])

    return (
        <section className={styles.FoodSection}>
            <h2 className="hidden">음식 리스트 목록</h2>
            <ul className={styles.FoodList}>
                {
                foodData &&
                foodData.slice(0,FoodListCount).map(el => {
                    return(
                        <li key={el.RCP_NM} className={styles.FoodItem}>
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
