import Link from 'next/link';

export default function Header() {
 
  return (
    <header>
      <h1>
        <Link href="/">
            <a><span className="hidden">Food GPT</span></a>
        </Link>
      </h1>
    </header>
  )
}
