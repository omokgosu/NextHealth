import Link from 'next/link';

import styles from '@/styles/components/header.module.scss'

export default function Header() {
 
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        <Link href="/" legacyBehavior>
            <a className={styles.headerLogo}><span className="hidden">Food GPT</span></a>
        </Link>
      </h1>
    </header>
  )
}
