import Link from 'next/link'
const blog = require('nmbs.config.json')

export default function Footer() {
  return (
    <footer role="contentinfo" className="text-center text-xs pb-1 absolute bottom-0 w-full">
      <p>Copyright &copy; {new Date().getFullYear()} <Link href="/">{blog.name}</Link>. All rights reserved.</p>
    </footer>
  )
}
