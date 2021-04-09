import Link from 'next/link'
import { getPosts } from 'pages/api/posts'
import MetaHead from 'components/MetaHead'
import { shuffle } from 'lib/helpers'

export default function Posts({ posts }) {
  return (
    <>
      <MetaHead />
      <ul className="min-h-screen">
        {shuffle(posts).map(post => (
          <li key={post.slug}>
            <Link href={`/learn/${post.category}/${post.slug}`}>{post.title}</Link>
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
