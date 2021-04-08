import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
var md = require('markdown-it')()

export const experiencesDirectory = join(process.cwd(), '_content/experiences')

export function getExperienceBySlug(slug, fields) {
  const realSlug = slug.replace(/\.md$/, '')

  const fullPath = join(experiencesDirectory, `${realSlug}.md`)

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  var theData = {}

  if (fields !== undefined && fields.length) {
    fields.forEach((field) => {
      if (field === 'slug') {
        theData[field] = realSlug
      }
      if (field === 'content') {
        theData[field] = md.render(content)
      }
      if (data[field]) {
        theData[field] = data[field]
      }
    })
  } else {
    theData = {slug: realSlug, ...data, content: md.render(content)}
  }

  return theData
}

export function getExperiences(fields = []) {
  if (!fs.existsSync(experiencesDirectory)) {
    return []
  }

  const slugs = fs.readdirSync(experiencesDirectory)

  const content = slugs
    .map((slug) => getExperienceBySlug(slug, fields))
    .sort((a, b) => (
      a.start_year < b.start_year ? 1 : -1
    ))

  return content
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).end()
  }

  const queryFields = req.query.fields

  let fields
  if (queryFields) {
    fields = queryFields.split(',')
  } else {
    fields = []
  }

  const content = getExperiences(fields)
  res.status(200).json(content)
}
