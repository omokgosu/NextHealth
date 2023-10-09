// fetchData.ts
import { Food } from '@/types/FoodType';
import { db } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function fetchData() {
  try {
    const querySnapshot = await getDocs(collection(db, 'Food'));
    const foodList: Food[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const foodItem = Object.assign({}, data) as Food;

      // 이미 동일한 RCP_NM이 foodList에 없을 때만 추가
      if (!foodList.some((item) => item.RCP_NM === foodItem.RCP_NM)) {
        foodList.push(foodItem);
      }
    });

    return foodList; // foodList를 반환하도록 수정
  } catch (error) {
    alert('Error fetching data from Firebase:');
    throw error; // 에러 처리
  }
}