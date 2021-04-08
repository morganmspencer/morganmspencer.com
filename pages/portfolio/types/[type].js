import Link from 'next/link'
import { getProjects } from 'pages/api/projects'
import MetaHead from 'components/MetaHead'
import ProjectItem from 'components/ProjectItem'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Type({ projects }) {
  return (
    <>
      <MetaHead />
      <header>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
          <h1 className="heading-underline">Portfolio</h1>
        </ScrollAnimation>
      </header>
    </>
  )
}

export async function getStaticProps() {
  const projects = getProjects()

  return {
    props: { projects },
  }
}
