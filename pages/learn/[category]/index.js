import Link from 'next/link'
import { getPostsByCategory } from 'pages/api/categories/[category]/posts'
import { getCategories, getCategoryBySlug } from 'pages/api/categories'
import MetaHead from 'components/MetaHead'
import PostItem from 'components/PostItem'
import ScrollAnimation from 'react-animate-on-scroll'
const blog = require('nmbs.config.json')

export default function Category({ category, posts }) {
  return (
    <>
      <div className="py-24 px-wrap relative">
        <div className="absolute top-0 left-0 w-full h-full pattern-cross-dots-md text-tan z-0 opacity-30" aria-hidden="true" />
        <MetaHead title={`${category.title}${blog.seo.sep}Categories`} />
        <div className="relative z-10">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} offset={0}>
            <h1 className="heading-underline">{category.title}</h1>
          </ScrollAnimation>
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => (
              <PostItem post={post} key={post.slug} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const categories = getCategories()

  return {
    paths: categories.map((category) => {
      return {
        params: {
          category: category.slug,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const category = getCategoryBySlug(params.category)
  const posts = getPostsByCategory(params.category)

  return {
    props: { category, posts },
  }
}
