import { getProjectTypeBySlug } from 'pages/api/project-types'

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

  const content = getProjectTypeBySlug(slug, fields)
  res.status(200).json(content)
}
