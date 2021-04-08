import Link from 'next/link'
import DefaultErrorPage from 'next/error'
import { getProjects, getProjectBySlug } from 'pages/api/projects'
import { getProjectTypesBySlugs } from 'pages/api/project-types'
import MetaHead from 'components/MetaHead'
import HeaderBanner from 'components/HeaderBanner'
import ScrollAnimation from 'react-animate-on-scroll'
const blog = require('nmbs.config.json')

export default function Post({ project, types }) {

  if (!project.published) {
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <>
      <MetaHead title={`${project.title}${blog.seo.sep}Portfolio`} description={project.excerpt} />
      <HeaderBanner color={project.color}>
        <ScrollAnimation animateIn="fadeInDown" animateOnce={true} delay={600}>
          <div className="flex items-center gap-4 uppercase text-sm font-semibold mb-1">
            {types.map(type => (
              <Link href={`/portfolio/types/${type.slug}`} key={type.slug}>
                <a className="no-underline">{type.title}</a>
              </Link>
            ))}
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={300}>
          <h1 className="mb-2">{project.title}</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={600}>
          <p className="max-w-2xl text-2xl leading-tight">{project.excerpt}</p>
        </ScrollAnimation>
      </HeaderBanner>
      <div className="px-wrap py-24" dangerouslySetInnerHTML={{__html: project.content}} />
    </>

  )
}

export async function getStaticPaths() {
  const projects = getProjects()

  return {
    paths: projects.map((project) => {
      return {
        params: {
          project: project.slug,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.project)
  const types = getProjectTypesBySlugs(project.types)

  return {
    props: {
      project: {
        ...project,
      },
      types: types,
    },
  }
}
