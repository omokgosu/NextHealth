'use clinet'

import Head from 'next/head'
import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { FoodState } from '@/recoil/atoms';
import { Food } from '@/types/FoodType';

import { db } from '../services/firebase';
import { collection , getDocs } from 'firebase/firestore';

import FoodList from '../containers/foodList/FoodList';
import Search from '@/containers/search/search'

export default function Home() {
  const router = useRouter();

  const [foodData , setFoodData] = useRecoilState(FoodState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Food'));
        const foodList:Food[] = [];
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const foodItem = Object.assign({}, data) as Food;
          
          foodList.push(foodItem);
        });

        setFoodData(foodList);
      } catch (error) {
        alert('Error fetching data from Firebase:');
      }
    };

    fetchData();
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
