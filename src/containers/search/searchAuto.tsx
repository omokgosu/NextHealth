'use client'
import React, { useState , useEffect} from 'react'
import styles from '@/styles/containers/search/searchAuto.module.scss'

// 전역상태관리
import { Food , searchInfo} from '@/types/FoodType';
import { FoodState , searchInputState} from '@/recoil/atoms';
import { useRecoilState , useRecoilValue } from 'recoil';

// props로 받아온 값들의 type
interface searchAutoProps{
  searchInputValue: string,
  searchBtnClick: ()=>void,
  searchInputRef: React.RefObject<HTMLInputElement>
}

export default function SearchAuto({
  searchInputValue,
  searchBtnClick,
  searchInputRef
}:searchAutoProps) {

    const foodData:Food[] = useRecoilValue(FoodState);

    const [filteredFoodTitle, setFilteredFoodTitle] = useState<string[]>([]); 

    // Input의 value가 바뀔때마다 실행 될 함수
    useEffect(() => {
      if(foodData && searchInputValue !== ''){

        // RCP_NM 만을 담은 string 배열 생성
        const filteredTitles:string[] = foodData
        .filter((food) => { if(food.RCP_NM) return food.RCP_NM.includes(searchInputValue) })
        .map((food) => food.RCP_NM);
        
        // 이미 한번 중복을 제거했으나 혹시 몰라 중복 한번 더 제거
        const uniqueFilteredTitles = [...new Set(filteredTitles)];

        setFilteredFoodTitle(uniqueFilteredTitles);
      }

      // input의 값이 없으면 빈 배열로 변경
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
            <li key={index} onClick={()=>{
              if(searchInputRef.current){
                const newValue = parts.join('');
                searchInputRef.current.value = newValue;
                searchBtnClick();
              }
            }}
            >
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
