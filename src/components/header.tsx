import Link from 'next/link';

import styles from '@/styles/header.module.scss'

export default function Header() {
 
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/" legacyBehavior>
            <a className={styles.headerLogo}><span className="hidden">Food GPT</span></a>
        </Link>
      </h1>
    </header>
  )
}
