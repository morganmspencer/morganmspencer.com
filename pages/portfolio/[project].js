import Link from 'next/link'
import DefaultErrorPage from 'next/error'
import { getProjects, getProjectBySlug } from 'pages/api/projects'
import { getProjectTypesBySlugs } from 'pages/api/project-types'
import { trimPublic } from 'lib/helpers'
import MetaHead from 'components/MetaHead'
import HeaderBanner from 'components/HeaderBanner'
import Window from 'components/Window'
import ScrollAnimation from 'react-animate-on-scroll'
const blog = require('nmbs.config.json')

export default function Project({ project, types }) {

  if (!project.published) {
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <article>
      <MetaHead title={`${project.title}${blog.seo.sep}Portfolio`} description={project.excerpt} />
      <HeaderBanner color={project.color} absolute={true}>
        <div className="flex flex-col lg:items-center justify-between lg:flex-row">
          <div className="flex-1 mb-12 lg:mb-0 lg:mr-12">
            <ScrollAnimation animateIn="fadeInDown" animateOnce={true} delay={600}>
              <div className="flex items-center gap-4 uppercase text-sm font-semibold mb-1">
                {types.map(type => (
                  <span>{type.title}</span>
                ))}
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={300}>
              <h1 className="mb-2">{project.title}</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={600}>
              <p className="max-w-2xl text-2xl leading-tight">{project.excerpt}</p>
            </ScrollAnimation>
          </div>
          <Window className="flex-1">
            <img src={project.thumbnail} alt={project.title} className="w-full h-auto" />
          </Window>
        </div>
      </HeaderBanner>
      <div className="px-wrap py-24 relative">
        <div className="absolute top-0 left-0 w-full h-full pattern-cross-dots-md text-tan z-0 opacity-30" aria-hidden="true" />
        {project.windows && (
          <div className="grid mb-12 gap-12 lg:grid-cols-2">
            <Window fade="left">
              <img src={trimPublic(project.windows)} alt={project.title} className="w-full h-auto" />
            </Window>
          </div>
        )}
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} className="relative z-10">
          <div className="entry-content" dangerouslySetInnerHTML={{__html: project.content}} />
        </ScrollAnimation>
      </div>
    </article>

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
