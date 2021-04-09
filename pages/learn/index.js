import Link from 'next/link'
import { getPosts } from 'pages/api/posts'
import MetaHead from 'components/MetaHead'
import PostItem from 'components/PostItem'
import { shuffle, trimPublic } from 'lib/helpers'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Posts({ posts }) {
  const allPosts = shuffle(posts)
  return (
    <div className="py-24 px-wrap relative">
      <div className="absolute top-0 left-0 w-full h-full pattern-cross-dots-md text-tan z-0 opacity-30" aria-hidden="true" />
      <MetaHead title="Learn" />
      <div className="relative z-10">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} offset={0}>
          <h1 className="heading-underline">Learn</h1>
        </ScrollAnimation>
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
          <article className="flex flex-col justify-center lg:flex-row lg:items-center md:col-span-2 lg:col-span-3">
            <div className="max-w-xl w-full">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} offset={0} delay={500}>
                <Link href={`/learn/${allPosts[0].category}/${allPosts[0].slug}`}>
                  <a className="block aspect-w-16 aspect-h-9 overflow-hidden">
                    <img src={trimPublic(allPosts[0].thumbnail)} alt={allPosts[0].title} className="object-cover" />
                  </a>
                </Link>
              </ScrollAnimation>
            </div>
            <div className="flex-1 mt-8 lg:mt-0 lg:ml-12">
              <ScrollAnimation animateIn="fadeInDown" animateOnce={true} offset={0}>
                <h2 className="h3 mb-4 max-w-xl">
                  <Link href={`/learn/${allPosts[0].category}/${allPosts[0].slug}`}>{allPosts[0].title}</Link>
                </h2>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true} offset={0} delay={500}>
                <p className="text-xl leading-snug max-w-xl">{allPosts[0].excerpt}</p>
              </ScrollAnimation>
            </div>
          </article>
          {allPosts.map((post, i) => i !== 0 && (
            <PostItem post={post} key={post.slug} />
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = getPosts()

  return {
    props: { posts },
  }
}
