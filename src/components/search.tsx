import styles from '@/styles/components/search.module.scss'

export default function Search() {
 
  return (
    <section className={styles.search}>
      <h2 className={styles.searchTitle}>어떤 음식을 드시고 싶으세요?</h2>
      <div className={styles.searchArea}>
        <input className={styles.serachInput} type="text" placeholder='Find for food name...'/>
        <button className={styles.searchBtn} type="button"><span className="hidden">음식검색버튼</span></button>
      </div>
    </section>
  )
}
