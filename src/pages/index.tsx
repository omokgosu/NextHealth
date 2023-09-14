'use clinet'

import Head from 'next/head'
import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { FoodState } from '@/recoil/atoms';
import { Food } from '@/types/FoodType';

import { db } from '../services/firebase';
import { collection , getDocs } from 'firebase/firestore';

import FoodList from '../constants/FoodList';
import Search from '@/constants/search'

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
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
