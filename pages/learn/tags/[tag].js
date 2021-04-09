import Link from 'next/link'
import { getPostsByTag } from 'pages/api/tags/[tag]/posts'
import { getTags, getTagBySlug } from 'pages/api/tags'
import MetaHead from 'components/MetaHead'
import PostItem from 'components/PostItem'
import ScrollAnimation from 'react-animate-on-scroll'
const blog = require('nmbs.config.json')

export default function Tag({ tag, posts }) {
  return (
    <>
      <div className="py-24 px-wrap relative">
        <div className="absolute top-0 left-0 w-full h-full pattern-cross-dots-md text-tan z-0 opacity-30" aria-hidden="true" />
        <MetaHead title={`${tag.title}${blog.seo.sep}Tags`} />
        <div className="relative z-10">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} offset={0}>
            <h1 className="heading-underline">{tag.title}</h1>
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
  const tags = getTags()

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag: tag.slug,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const tag = getTagBySlug(params.tag)
  const posts = getPostsByTag(params.tag)

  return {
    props: { tag, posts },
  }
}
