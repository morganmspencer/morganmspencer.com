import { useState } from 'react'
import Link from 'next/link'
import { RiMenuFill } from 'react-icons/ri'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header role="banner" className="px-wrap py-3 relative w-full z-30 bg-dark text-light flex font-sans font-bold items-center justify-between lowercase">
      <ScrollAnimation animateIn="fadeInLeft" offset={0} animateOnce={true}>
        <Link href="/">
          <a className="text-lg">Morgan</a>
        </Link>
      </ScrollAnimation>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="p-2 text-xl md:hidden"
      >
        <ScrollAnimation animateIn="fadeInRight" offset={0} animateOnce={true}>
          <span className="sr-only">Toggle Menu</span>
          <RiMenuFill />
        </ScrollAnimation>
      </button>

      <nav role="navigation" aria-label="main navigation" className={`${menuOpen ? 'flex' : 'hidden'} flex-col bg-dark items-center absolute top-full right-0 md:bg-transparent md:flex md:ml-4 md:static md:flex-row`}>
        <ScrollAnimation animateIn="fadeInRight" offset={0} animateOnce={true}>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/learn">Learn</Link>
          <Link href="/contact">Contact</Link>
        </ScrollAnimation>
      </nav>
    </header>
  )
}
