import Link from 'next/link'

export default function ProjectItem({ project }) {
  return (
    <Link href={`/portfolio/${project.slug}`}>
      <a className="block aspect-w-16 aspect-h-9 group" style={{backgroundColor: project.color}}>
        <div className="w-full h-full p-4 transition-all duration-500 md:p-6 group-hover:p-2 group-focus:p-2">
          <div className="w-full h-full relative bg-light flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full bg-cover duration-500 group-hover:opacity-5 group-focus:opacity-5" style={{backgroundImage: `url(${project.thumbnail})`}} />
            <h3 className="h2 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100">{project.title}</h3>
          </div>
        </div>
      </a>
    </Link>
  )
}
