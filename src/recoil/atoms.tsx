import { atom } from 'recoil';
import { Food } from '@/types/FoodType';

export const FoodState = atom<Food[]>({
    key: 'FoodState',
    default: []
})

export const searchInputState = atom<string>({
    key: 'searchInputState',
    default: ''
})