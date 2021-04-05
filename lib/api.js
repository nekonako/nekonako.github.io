import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'contents')

export function getPostSlugs() {
   return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
   const realSlug = slug.replace(/\.md$/, '')
   const fullPath = join(postsDirectory, `${realSlug}.md`)
   const fileContents = fs.readFileSync(fullPath, 'utf8')
   const { data, content } = matter(fileContents)

   const items = {}

   // Ensure only the minimal needed data is exposed
   fields.forEach((field) => {
      if (field === 'slug') {
         items[field] = realSlug
      }
      if (field === 'content') {
         items[field] = content
      }
      if (data[field]) {
         items[field] = data[field]
      }
   })

   return items
}

export function getAllPosts(fields = []) {
   const slugs = getPostSlugs()
   const posts = slugs
   .map((slug) => getPostBySlug(slug, fields))
   // sort posts by date in descending order
   .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
   return posts
}


const projectsDirectory = join(process.cwd(), 'projects')

export function getProjectsSlugs() {
   return fs.readdirSync(projectsDirectory)
}

export function getProjectsBySlug(slug, fields = []) {
   const realSlug = slug.replace(/\.md$/, '')
   const fullPath = join(projectsDirectory, `${realSlug}.md`)
   const fileContents = fs.readFileSync(fullPath, 'utf8')
   const { data, content } = matter(fileContents)

   const items = {}

   // Ensure only the minimal needed data is exposed
   fields.forEach((field) => {
      if (field === 'slug') {
         items[field] = realSlug
      }
      if (field === 'content') {
         items[field] = content
      }
      if (data[field]) {
         items[field] = data[field]
      }
   })

   return items
}

export function getAllProjects(fields = []) {
   const slugs = getProjectsSlugs()
   const projects = slugs
   .map((slug) => getProjectsBySlug(slug, fields))
   // sort projects by date in descending order
   .sort((project1, project2) => (project1.date > project2.date ? -1 : 1))
   return projects
}
