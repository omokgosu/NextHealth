'use client'
import React, { useState , useEffect} from 'react'
import styles from '@/styles/containers/search/searchAuto.module.scss'

import { Food} from '@/types/FoodType';
import { FoodState } from '@/recoil/atoms';
import { useRecoilValue } from 'recoil';

export default function SearchAuto() {

    const foodData:Food[] = useRecoilValue(FoodState);

    const [filteredFoodTitle, setFilteredFoodTitle] = useState<string[]>(); 

    /* useEffect(() => {
        console.log(searchInfo);
        const filteredTitles:string[] = foodData
          .filter((food) => food.RCP_NM.includes(searchInfo.name))
          .map((food) => food.RCP_NM);
        
        setFilteredFoodTitle(filteredTitles);
      }, [searchInfo]);

      useEffect(()=>{
        console.log(filteredFoodTitle);
      },[filteredFoodTitle]) */

  return (
    <ul className={styles.searchAuto}>
        
    </ul>
  )
}
