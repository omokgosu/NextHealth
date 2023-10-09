'use clinet'

import Head from 'next/head'
import React, {useEffect} from 'react';
import { useRouter } from 'next/router'

//recoil 상태관리
import { useRecoilState } from 'recoil';
import { FoodState } from '@/recoil/atoms';

//컴포넌트 관리
import FoodList from '../containers/foodList/FoodList';
import Search from '@/containers/search/search'

// fetchData 함수 가져오기
import { fetchData } from '@/services/fetchData';

export default function Home() {
  const router = useRouter();
  
  const [foodState, setFoodState] = useRecoilState(FoodState);

  useEffect(() => {
    const fetchAndSetData = async () => {
      try {
        // 따로 분리해둔 fetchData()
        const foodList = await fetchData();
        setFoodState(foodList); // Recoil 상태 업데이트
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAndSetData();
  }, []);

  return (
    <>
      <Head>
        <meta name="keywords" content="food, search" />
        <meta property="og:title" content="Food GPT" />
        <meta property="og:description" content="음식 검색 사이트" />
        <meta property="twitter:title" content="Food GPT" />
        <meta property="twitter:description" content="음식 검색 사이트" />
        <title>Food GPT</title>
        <meta name="description" content="음식 검색 사이트" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.pathname === '/' && 
        <>
          <Search />
          <FoodList />
        </>
      }
    </>
  )
}
