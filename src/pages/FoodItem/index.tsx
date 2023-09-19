import styles from '@/styles/pages/FoodItem/FoodItem.module.scss'
import { Food } from '@/types/FoodType'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { FoodRecipe } from '@/recoil/atoms';

export default function FoodItem() {
  
  const FoodData:Food = useRecoilValue(FoodRecipe);
  
  const renderManuals = (): React.ReactNode | null => {
    const manuals = [];
    for (let i = 1; i <= 20; i++) {
      const manualKey = `MANUAL${String(i).padStart(2, '0')}`;
      const manualImageKey = `MANUAL_IMG${String(i).padStart(2, '0')}`;
      const manualText = FoodData[manualKey];
      const manualImage = FoodData[manualImageKey];
  
      // MANUAL 및 MANUAL_IMAGE가 빈 문자열이 아닌 경우에만 렌더링
      if (manualText !== '' && manualImage !== '') {
        manuals.push(
          <li key={manualKey}>
            <p>{manualText}</p>
            <img src={manualImage} alt='조리법' />
          </li>
        );
      }
    }
  
    // MANUAL 및 MANUAL_IMAGE가 모두 빈 문자열이면 null 반환
    return manuals.length > 0 ? manuals : null;
  };
  

  return (
    <section className={styles.FoodItem}>
      <h2 className='hidden'>음식정보</h2>
      <Link href="/" className={styles.prevBtn}>
        이전
      </Link>
      {
        FoodData &&
          <article className={styles.FoodItemInfo}>
            <div className={styles.FoodMainImg}>
              <img  src={FoodData.ATT_FILE_NO_MAIN} alt={FoodData.RCP_NM} />
            </div>
            <h3 className={styles.FoodName}>{FoodData.RCP_NM}</h3>
            <ul className={styles.FoodInfo}>
                <li>탄수화물 {FoodData.INFO_CAR}g</li>
                <li>단백질 {FoodData.INFO_PRO}g</li>
                <li>지방 {FoodData.INFO_FAT}g</li>
            </ul>
            <p className={styles.FoodMaterial}>{FoodData.RCP_PARTS_DTLS}</p>
            <dl className={styles.FoodTip}>
              <dt>Tip</dt>
              <dd>{FoodData.RCP_NA_TIP}</dd>
            </dl>
            <dl className={styles.FoodRecipe}>
              <dt>조리법</dt>
              <dd>
                <ul className={styles.FoodRecipeSeq}>
                  {renderManuals()}
                </ul>
              </dd>
            </dl>
          </article>
      }
    </section>
  )
}
