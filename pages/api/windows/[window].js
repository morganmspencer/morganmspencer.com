import { getWindowBySlug } from 'pages/api/window'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).end()
  }

  const slug = req.query.window
  const queryFields = req.query.fields

  let fields
  if (queryFields) {
    fields = queryFields.split(',')
  } else {
    fields = []
  }

  const content = getWindowBySlug(slug, fields)
  res.status(200).json(content)
}
