'use client'
import React, {useRef} from 'react'
import styles from '@/styles/containers/search/search.module.scss'
import { searchInputState } from '@/recoil/atoms'
import { useRecoilState } from 'recoil'
import { searchInfo } from '@/types/FoodType'

import SearchAuto from './searchAuto'

export default function Search() {

  const searchInputRef = useRef<HTMLInputElement>(null)
  const carInputRef = useRef<HTMLInputElement>(null);
  const proInputRef = useRef<HTMLInputElement>(null);
  const fatInputRef = useRef<HTMLInputElement>(null);

  const [searchInput , setSearchInput] = useRecoilState<searchInfo>(searchInputState);
  
  const searchBtnClick=():void=>{
    if(searchInputRef.current){
        let car:string | undefined | number = carInputRef?.current?.value;
        let pro:string | undefined | number = proInputRef?.current?.value;
        let fat:string | undefined | number = fatInputRef?.current?.value;

        if(isNaN(Number(car))){
          return alert('정수를 입력해 주세요.')
        }
        if(isNaN(Number(pro))){
          return alert('정수를 입력해 주세요.')
        }
        if(isNaN(Number(fat))){
          return alert('정수를 입력해 주세요.')
        }

        if(car === '') car = '0';
        if(pro === '') pro = '0';
        if(fat === '') fat = '0';

      setSearchInput({
        name: searchInputRef.current.value,
        car:  car,
        pro: pro,
        fat: fat
      });
    }
  }

  const searchBtnEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      searchBtnClick();
    }
  };

  return (
    <section className={styles.search}>
      <h2 className={styles.searchTitle}>어떤 음식을 드시고 싶으세요?</h2>
      <p className={styles.searchTip}>&#42; 영양성분의 g 수로도 검색할 수 있습니다.</p>
      <ul className={styles.searchNut}>
        <li>
          <label htmlFor='CAR'>탄수화물</label>
          <input 
            ref={carInputRef}
            name="CAR" 
            type='text'
            maxLength={2}
          />
        </li>
        <li>
          <label htmlFor='PRO'>단백질</label>
          <input 
            ref={proInputRef}
            name="PRO" 
            type='text'
            maxLength={2}
          />
        </li>
        <li>
          <label htmlFor='FAT'>지방</label>
          <input 
            ref={fatInputRef}
            name="FAT" 
            type='text'
            maxLength={2}
          />
        </li>
      </ul>
      <div className={styles.searchArea}>
        <input 
          ref={searchInputRef}
          className={styles.serachInput}
          type="text"
          placeholder='Find for food name...'
          onKeyDown={searchBtnEnter}
        />
        <button
          className={styles.searchBtn}
          type="button"
          onClick={searchBtnClick}
          >
          <span className="hidden">음식검색버튼</span>
        </button>
        <SearchAuto />
      </div>
    </section>
  )
}
