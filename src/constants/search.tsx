'use client'
import React, {useRef} from 'react'
import styles from '@/styles/search.module.scss'
import { searchInputState } from '@/recoil/atoms'
import { useRecoilState } from 'recoil'
import { searchInfo } from '@/types/FoodType'

export default function Search() {

  const searchInputRef = useRef<HTMLInputElement>(null)
  const [searchInput , setSearchInput] = useRecoilState<searchInfo>(searchInputState);
  const carInputRef = useRef<HTMLInputElement>(null);
  const proInputRef = useRef<HTMLInputElement>(null);
  const fatInputRef = useRef<HTMLInputElement>(null);
  
  const searchBtnClick=():void=>{
    if(searchInputRef.current){
      setSearchInput({
        name: searchInputRef.current.value,
        car: carInputRef?.current?.value,
        pro: proInputRef?.current?.value,
        fat: fatInputRef?.current?.value
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
      <ul className={styles.searchNut}>
        <li>
          <label htmlFor='CAR'>탄수화물</label>
          <input 
            ref={carInputRef}
            name="CAR" 
            type='number'
          />
        </li>
        <li>
          <label htmlFor='PRO'>단백질</label>
          <input 
            ref={proInputRef}
            name="PRO" 
            type='number'
          />
        </li>
        <li>
          <label htmlFor='FAT'>지방</label>
          <input 
            ref={fatInputRef}
            name="FAT" 
            type='number'
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
      </div>
    </section>
  )
}
