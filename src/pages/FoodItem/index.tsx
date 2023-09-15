import styles from '@/styles/pages/FoodItem/FoodItem.module.scss'
import { Food } from '@/types/FoodType'

const data : Food= {
  ATT_FILE_NO_MAIN
: 
"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_01080_2.png",
ATT_FILE_NO_MK
: 
"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_01080_1.png",
HASH_TAG
: 
"쌀국수",
INFO_CAR
: 
"76.4",
INFO_ENG
: 
"584.8",
INFO_FAT
: 
"25.2",
INFO_NA
: 
"4.9",
INFO_PRO
: 
"13.1",
INFO_WGT
: 
"",
MANUAL01
: 
"1. 미지근한 물에 쌀국수 면을\n부드러워질 때까지 불린다.",
MANUAL02
: 
"2. 새우는 소금, 청주, 달걀 흰자,\n전분물로 반죽한 뒤 튀긴다.",
MANUAL03
: 
"3.  팬에 메추리알을 부친다.",
MANUAL04
: 
"4. 팬에 올리브오일과 고추기름을\n두르고 마늘을 살짝 볶은 뒤\n튀긴새우와 쌀국수 면을 넣는다.",
MANUAL05
: 
"5. 굴소스와 식초로 간을 하고\n재료가 다 익어갈 때 시금치를\n넣고 불을 끈다.",
MANUAL06
: 
"6. 땅콩가루와 메추리알을 올려\n마무리한다.",
MANUAL07
: 
"",
MANUAL08
: 
"",
MANUAL09
: 
"",
MANUAL10
: 
"",
MANUAL11
: 
"",
MANUAL12
: 
"",
MANUAL13
: 
"",
MANUAL14
: 
"",
MANUAL15
: 
"",
MANUAL16
: 
"",
MANUAL17
: 
"",
MANUAL18
: 
"",
MANUAL19
: 
"",
MANUAL20
: 
"",
MANUAL_IMG01
: 
"http://www.foodsafetykorea.go.kr/uploadimg/cook/20_01080_1.JPG",
MANUAL_IMG02
: 
"http://www.foodsafetykorea.go.kr/uploadimg/cook/20_01080_2.JPG",
MANUAL_IMG03
: 
"http://www.foodsafetykorea.go.kr/uploadimg/cook/20_01080_3.JPG",
MANUAL_IMG04
: 
"http://www.foodsafetykorea.go.kr/uploadimg/cook/20_01080_4.JPG",
MANUAL_IMG05
: 
"http://www.foodsafetykorea.go.kr/uploadimg/cook/20_01080_5.JPG",
MANUAL_IMG06
: 
"http://www.foodsafetykorea.go.kr/uploadimg/cook/20_01080_6.JPG",
MANUAL_IMG07
: 
"",
MANUAL_IMG08
: 
"",
MANUAL_IMG09
: 
"",
MANUAL_IMG10
: 
"",
MANUAL_IMG11
: 
"",
MANUAL_IMG12
: 
"",
MANUAL_IMG13
: 
"",
MANUAL_IMG14
: 
"",
MANUAL_IMG15
: 
"",
MANUAL_IMG16
: 
"",
MANUAL_IMG17
: 
"",
MANUAL_IMG18
: 
"",
MANUAL_IMG19
: 
"",
MANUAL_IMG20
: 
"",
RCP_NA_TIP
: 
"굴소스와 식초로 감칠맛을 더해 단맛이 없어도 담백하고 맛있는 요리를 할 수 있어요.",
RCP_NM
: 
"시금치 볶음 쌀국수",
RCP_PARTS_DTLS
: 
"새우(100g), 쌀국수(150g), 시금치(40g),\n달걀(1개), 메추리알(20g), 마늘(20g),\n굴소스(20g), 식초(30g), 땅콩(3g),\n전분(10g), 청주(5g), 고추기름(15g),\n소금(0.5g), 후춧가루(3g),\n올리브오일(15g)",
RCP_PAT2
: 
"일품",
RCP_SEQ
: 
"1080",
RCP_WAY2
: 
"볶기",
}
export default function FoodItem() {
  
  return (
    <section className={styles.FoodItem}>
      <button type="button">이전</button>
      <article>
        <div className={styles.FoodMainImg}>
          <img  src={data.ATT_FILE_NO_MAIN} alt={data.RCP_NM} />
        </div>
        <h3 className={styles.FoodName}>{data.RCP_NM}</h3>
        <ul className={styles.FoodInfo}>
            <li>탄수화물 {data.INFO_CAR}g</li>
            <li>단백질 {data.INFO_PRO}g</li>
            <li>지방 {data.INFO_FAT}g</li>
        </ul>
        <p className={styles.FoodMaterial}>{data.RCP_PARTS_DTLS}</p>
        <dl>
          <dt>Tip</dt>
          <dd>{data.RCP_NA_TIP}</dd>
        </dl>
        <dl>
          <dt>조리법</dt>
          <dd>
            <ul>
              <li>
                <p>{data.MANUAL01}</p>
                <img src={data.MANUAL_IMG01} alt='조리법' />
              </li>
              <li>
                <p>{data.MANUAL02}</p>
                <img src={data.MANUAL_IMG02} alt='조리법' />
              </li>
            </ul>
          </dd>
        </dl>
      </article>
    </section>
  )
}
