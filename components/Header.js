import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RiMenuFill } from 'react-icons/ri'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = router.pathname

  const dark = ['/portfolio/[project]', '/contact']

  const handleClick = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    router.push(e.target.getAttribute('href'))
  }

  return (
    <header
      role="banner"
      className={`${dark.includes(pathname) || pathname === '/' ? 'top-0 left-0 bg-transparent text-light' : 'text-dark'} absolute px-wrap py-3 w-full z-30 flex font-sans font-bold items-center justify-between lowercase`}
    >
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

      <nav role="navigation" aria-label="main navigation" className={`${menuOpen ? 'block' : 'hidden'} text-light w-full h-screen p-12 fixed bg-dark top-0 right-0 md:block md:bg-transparent md:ml-4 md:static md:w-auto md:h-auto md:p-0 md:text-current`}>
        <button
          className="absolute top-0 right-0 py-2 px-4 block md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          Close
        </button>
        <ScrollAnimation animateIn="fadeInRight" offset={0} animateOnce={true} className="flex flex-col gap-6 text-3xl md:gap-2 md:flex-row md:text-base">
          <a href="/portfolio" onClick={handleClick}>Portfolio</a>
          <a href="/learn" onClick={handleClick}>Learn</a>
          <a href="/contact" onClick={handleClick}>Contact</a>
        </ScrollAnimation>
      </nav>
    </header>
  )
}
