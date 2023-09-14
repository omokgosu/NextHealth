import { atom } from 'recoil';
import { Food , searchInfo } from '@/types/FoodType';

export const FoodState = atom<Food[]>({
    key: 'FoodState',
    default: []
})

export const searchInputState = atom<searchInfo>({
    key: 'searchInputState',
    default: {
        name: '',
        car: '',
        pro: '',
        fat: ''
    }
})