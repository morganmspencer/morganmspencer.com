import fs from 'fs'
import { projectsDirectory, getProjectBySlug } from 'pages/api/projects'

export function getProjectsByType(type, fields = []) {
  const slugs = fs.readdirSync(projectsDirectory)

  const content = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    .sort((a, b) => (
      a.title > b.title ? 1 : -1
    ))


  content.forEach((project, i) => {
    if (!project.types || !project.types.includes(type)) {
      content.splice(i, 1)
    }
  })

  return content
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).end()
  }

  const slug = req.query.projectType
  const queryFields = req.query.fields

  let fields
  if (queryFields) {
    fields = queryFields.split(',')
  } else {
    fields = []
  }

  const content = getProjectsByType(slug, fields)
  res.status(200).json(content)
}
