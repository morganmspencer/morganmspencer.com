import { useState } from 'react'
import Link from 'next/link'
import { RiMenuFill } from 'react-icons/ri'
const blog = require('nmbs.config.json')

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header role="banner" className="px-wrap py-3 absolute z-30 top-0 w-full bg-dark text-light flex font-sans font-bold items-center justify-between lowercase">
      <Link href="/">
        <a className="text-lg">Morgan</a>
      </Link>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="p-2 text-xl md:hidden"
      >
        <span className="sr-only">Toggle Menu</span>
        <RiMenuFill />
      </button>
      <nav role="navigation" aria-label="main navigation" className={`${menuOpen ? 'block' : 'hidden'} items-center mt-4 md:flex md:ml-4 md:mt-0`}>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/learn">Learn</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
