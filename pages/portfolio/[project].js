import Link from 'next/link'
import DefaultErrorPage from 'next/error'
import { getProjects, getProjectBySlug } from 'pages/api/projects'
import { getProjectTypesBySlugs } from 'pages/api/project-types'
import MetaHead from 'components/MetaHead'
const blog = require('nmbs.config.json')

export default function Post({ project, types }) {

  if (!project.published) {
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <>
      <MetaHead title={`${project.title}`} />
      <h1>{project.title}</h1>
      <p>
        <span>{blog.categories.name_singular}: </span>
      </p>
      <p>
        {types.map(type => (
          <Link href={`/learn/tags/${type.slug}`} key={type.slug}>{type.title}</Link>
        ))}
      </p>
      <div dangerouslySetInnerHTML={{__html: project.content}} />
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
