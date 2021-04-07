import Link from 'next/link'
import { getPosts } from 'pages/api/posts'
import MetaHead from 'components/MetaHead'
import ScrollAnimation from 'react-animate-on-scroll'
const blog = require('nmbs.config.json')

export default function Home({ posts }) {
  return (
    <>
      <MetaHead />
      <div className="full-height-header flex items-center justify-center flex-col uppercase overflow-hidden bg-dark text-light">
        <div className="absolute bottom-0 left-0 w-full h-full pattern-cross-dots-md text-navy z-0 opacity-30" aria-hidden="true" />
        <div className="relative z-10 flex items-center flex-col">
          <ScrollAnimation animateIn="fadeInDown" animateOnce={true} delay={500}>
            <img src="/images/uploads/profile.jpg" alt="Morgan Spencer" className="mb-6 h-36 w-36 md:h-48 md:w-48 shadow-lg rounded-full border-4 border-solid border-light" />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={1000}>
            <h1 className="text-center">{blog.name}</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={1500}>
            <h2 className="mb-24 text-center font-normal text-tan">{blog.tagline}</h2>
          </ScrollAnimation>
        </div>
      </div>
      <ul className="min-h-screen">
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/${post.category}/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const posts = getPosts()

  return {
    props: { posts },
  }
}
