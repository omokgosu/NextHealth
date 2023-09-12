import { atom } from 'recoil';
import { Food } from '@/types/FoodType';

export const FoodState = atom<Food[]>({
    key: 'FoodState',
    default: []
})