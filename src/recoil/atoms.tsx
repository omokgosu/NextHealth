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

export const FoodRecipe = atom<Food>({
    key: 'FoodRecipe',
    default: {
        ATT_FILE_NO_MAIN: '',
        ATT_FILE_NO_MK: '',
        HASH_TAG: '',
        INFO_CAR: '',
        INFO_ENG: '',
        INFO_FAT: '',
        INFO_NA: '',
        INFO_PRO: '',
        INFO_WGT: '',
        MANUAL01: '',
        MANUAL02: '',
        MANUAL03: '',
        MANUAL04: '',
        MANUAL05: '',
        MANUAL06: '',
        MANUAL07: '',
        MANUAL08: '',
        MANUAL09: '',
        MANUAL10: '',
        MANUAL11: '',
        MANUAL12: '',
        MANUAL13: '',
        MANUAL14: '',
        MANUAL15: '',
        MANUAL16: '',
        MANUAL17: '',
        MANUAL18: '',
        MANUAL19: '',
        MANUAL20: '',
        MANUAL_IMG01: '',
        MANUAL_IMG02: '',
        MANUAL_IMG03: '',
        MANUAL_IMG04: '',
        MANUAL_IMG05: '',
        MANUAL_IMG06: '',
        MANUAL_IMG07: '',
        MANUAL_IMG08: '',
        MANUAL_IMG09: '',
        MANUAL_IMG10: '',
        MANUAL_IMG11: '',
        MANUAL_IMG12: '',
        MANUAL_IMG13: '',
        MANUAL_IMG14: '',
        MANUAL_IMG15: '',
        MANUAL_IMG16: '',
        MANUAL_IMG17: '',
        MANUAL_IMG18: '',
        MANUAL_IMG19: '',
        MANUAL_IMG20: '',
        RCP_NA_TIP: '',
        RCP_NM: '',
        RCP_PARTS_DTLS: '',
        RCP_PAT2: '',
        RCP_SEQ: '',
        RCP_WAY2: ''
    }
})