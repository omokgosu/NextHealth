'use client'
import React, { useState , useEffect} from 'react'
import styles from '@/styles/containers/search/searchAuto.module.scss'

import { Food} from '@/types/FoodType';
import { FoodState } from '@/recoil/atoms';
import { useRecoilValue } from 'recoil';

interface searchAutoProps{
  searchInputValue: string
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
        
        const uniqueFilteredTitles = [...new Set(filteredTitles)];

        setFilteredFoodTitle(uniqueFilteredTitles);
      }

      if(foodData && searchInputValue === ''){
        setFilteredFoodTitle([]);
      }
    }, [searchInputValue]);

  return (
    <ul className={styles.searchAuto}>
       {filteredFoodTitle.length > 0 &&
        filteredFoodTitle.map((title, index) => {
          // 검색어와 일치하는 부분을 감싸는 span 태그로 감싸고 스타일을 적용
          const parts = title.split(new RegExp(`(${searchInputValue})`, 'gi'));
          return (
            <li key={index}>
              <p>
                {parts.map((part, i) =>
                  part.toLowerCase() === searchInputValue.toLowerCase() ? (
                    <span key={i} className={styles.highlight}>
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
              </p>
            </li>
          );
        })}
    </ul>
  )
}
