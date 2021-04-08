import Link from 'next/link'

export default function ProjectItem({ project }) {
  return (
    <Link href={`/porfolio/${project.slug}`}>
      <a className="block aspect-w-16 aspect-h-9 group" style={{backgroundColor: project.color}}>
        <div className="w-full h-full p-4 transition-all md:p-6 group-hover:p-2 group-focus:p-2">
          <div className="w-full h-full relative bg-light flex items-center justify-center">
            <h3 className="opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100">{project.title}</h3>
          </div>
        </div>
      </a>
    </Link>
  )
}
