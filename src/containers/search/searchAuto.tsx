'use client'
import React, { useState , useEffect} from 'react'
import styles from '@/styles/containers/search/searchAuto.module.scss'

import { Food} from '@/types/FoodType';
import { FoodState } from '@/recoil/atoms';
import { useRecoilValue } from 'recoil';

interface searchAutoProps{
  searchInputValue: string,
}

export default function SearchAuto({
  searchInputValue
}:searchAutoProps) {

    const foodData:Food[] = useRecoilValue(FoodState);

    const [filteredFoodTitle, setFilteredFoodTitle] = useState<string[]>([]); 

    useEffect(() => {
      if(foodData && searchInputValue !== ''){
        const filteredTitles:string[] = foodData
        .filter((food) => { if(food.RCP_NM) return food.RCP_NM.includes(searchInputValue) })
        .map((food) => food.RCP_NM);
  
        setFilteredFoodTitle(filteredTitles);
      }
    }, [searchInputValue]);

  return (
    <ul className={styles.searchAuto}>
      {
        filteredFoodTitle.length > 0 &&
        filteredFoodTitle.map((title, index) => (
          <li key={index}>
            <p>{title}</p>
          </li>
        ))
      }
    </ul>
  )
}
