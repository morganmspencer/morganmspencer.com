import fs from 'fs'
import { postsDirectory, getPostBySlug } from 'pages/api/posts'

export function getPostsByTag(tag, fields = []) {
  const slugs = fs.readdirSync(postsDirectory)

  const content = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((a, b) => (
      a.published_at > b.published_at ? 1 : -1
    ))

  content.forEach((post, i) => {
    if (!post.tags || !post.tags.includes(tag)) {
      content.splice(i, 1)
    }
  })

  return content
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).end()
  }

  const slug = req.query.tag
  const queryFields = req.query.fields

  let fields
  if (queryFields) {
    fields = queryFields.split(',')
  } else {
    fields = []
  }

  const content = getPostsByTag(slug, fields)
  res.status(200).json(content)
}
