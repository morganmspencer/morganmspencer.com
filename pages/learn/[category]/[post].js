import Link from 'next/link'
import { getPosts, getPostBySlug } from 'pages/api/posts'
import { getCategoryBySlug } from 'pages/api/categories'
import { getTagsBySlugs } from 'pages/api/tags'
import MetaHead from 'components/MetaHead'
import { trimPublic } from 'lib/helpers'
import ScrollAnimation from 'react-animate-on-scroll'
const blog = require('nmbs.config.json')

export default function Post({ post, category, tags }) {
  return (
    <article className="py-24 px-wrap relative">
      <div className="absolute top-0 left-0 w-full h-full pattern-cross-dots-md text-tan z-0 opacity-30" aria-hidden="true" />
      <MetaHead title={`${post.title}`} />
      <header className="mb-8 relative z-10">
        <div className="mx-auto max-w-2xl">
          <ScrollAnimation animateIn="fadeInDown" animateOnce={true} delay={300} offset={0}>
            <Link href={`/learn/${category.slug}`}>
              <a className="uppercase text-xs font-bold">{category.title}</a>
            </Link>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} offset={0}>
            <h1>{post.title}</h1>
          </ScrollAnimation>
          {tags && tags.length > 0 && (
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300} offset={0}>
              <p className="mt-2">
                {tags.map(tag => (
                  <Link href={`/learn/tags/${tag.slug}`} key={tag.slug}>
                    <a className="mr-2">{tag.title}</a>
                  </Link>
                ))}
              </p>
            </ScrollAnimation>
          )}
        </div>
      </header>
      {post.thumbnail && (
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
          <div className="w-full max-w-4xl mx-auto relative z-10">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
              <img src={trimPublic(post.thumbnail)} alt={post.title} className="object-cover" />
            </div>
          </div>
        </ScrollAnimation>
      )}
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
        <div className="entry-content mx-auto mt-12 relative z-10" dangerouslySetInnerHTML={{__html: post.content}} />
      </ScrollAnimation>
    </article>

  )
}

export async function getStaticPaths() {
  const posts = getPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          post: post.slug,
          category: post.category,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const category = getCategoryBySlug(params.category)
  const post = getPostBySlug(params.post)
  const tags = getTagsBySlugs(post.tags)

  return {
    props: {
      post: {
        ...post,
      },
      category: {
        ...category,
      },
      tags: tags,
    },
  }
}
