import Link from 'next/link'
import { trimPublic } from 'lib/helpers'
import ScrollAnimation from 'react-animate-on-scroll'

export default function PostItem({ post }) {
  return (
    <article key={post.slug}>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <Link href={`/learn/${post.category}/${post.slug}`}>
          <a className="block aspect-w-16 aspect-h-9 overflow-hidden">
            <img src={trimPublic(post.thumbnail)} alt={post.title} className="object-cover" />
          </a>
        </Link>
        <h2 className="h4 mt-4">
          <Link href={`/learn/${post.category}/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-xl leading-snug mt-4">{post.excerpt}</p>
      </ScrollAnimation>
    </article>
  )
}
