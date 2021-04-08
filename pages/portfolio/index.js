import Link from 'next/link'
import { getProjects } from 'pages/api/projects'
import MetaHead from 'components/MetaHead'
import ProjectItem from 'components/ProjectItem'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Portfolio({ projects }) {
  return (
    <>
      <MetaHead />
      <div className="py-24 px-wrap relative">
        <div className="absolute top-0 left-0 w-full h-full pattern-cross-dots-md text-tan z-0 opacity-30" aria-hidden="true" />
        <div className="relative z-10">
          <header>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
              <h1 className="heading-underline">Portfolio</h1>
            </ScrollAnimation>
          </header>
          <section className="grid lg:grid-cols-2 gap-12 relative z-10 mt-12">
            {projects.map((project, i) => (
              <ScrollAnimation key={i} animateIn={i % 2 == 0 ? 'fadeInLeft' : 'fadeInRight'} animateOnce={true} delay={i % 2 == 0 ? 300 : 600}>
                <ProjectItem project={project} />
              </ScrollAnimation>
            ))}
          </section>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const projects = getProjects()

  return {
    props: { projects },
  }
}
