import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
var md = require('markdown-it')()

export const windowsDirectory = join(process.cwd(), '_content/windows')

export function getWindowsBySlugs(slugs = [], fields = []) {
  var windows = []

  if (slugs !== undefined && slugs.length) {
    slugs.forEach((slug) => {
      const window = getWindowBySlug(slug, fields)
      windows.push(window)
    })
  }

  return windows
}

export function getWindowBySlug(slug, fields) {
  const realSlug = slug.replace(/\.md$/, '')

  const fullPath = join(windowsDirectory, `${realSlug}.md`)

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

export function getWindows(fields = []) {
  if (!fs.existsSync(windowsDirectory)) {
    return []
  }

  const slugs = fs.readdirSync(windowsDirectory)

  const content = slugs
    .map((slug) => getWindowBySlug(slug, fields))
    .sort((a, b) => (
      a.title > b.title ? 1 : -1
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

  const content = getWindows(fields)
  res.status(200).json(content)
}
