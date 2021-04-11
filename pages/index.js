import Link from 'next/link'
import { getExperiences } from 'pages/api/experiences'
import { getEducations } from 'pages/api/educations'
import { getProjects } from 'pages/api/projects'
import { getProjectTypes } from 'pages/api/project-types'
import MetaHead from 'components/MetaHead'
import ProjectItem from 'components/ProjectItem'
import ScrollAnimation from 'react-animate-on-scroll'
import { RiArrowRightLine, RiTwitterFill, RiGithubFill, RiLinkedinFill } from 'react-icons/ri'
const blog = require('nmbs.config.json')

export default function Home({ experiences, educations, projects, types }) {
  return (
    <>
      <MetaHead />
      <section className="full-height-header flex items-center justify-center flex-col uppercase overflow-hidden bg-dark text-light">
        <div className="absolute top-0 left-0 w-full h-full pattern-cross-dots-md text-navy z-0 opacity-30" aria-hidden="true" />
        <div className="relative z-10 flex items-center flex-col">
          <ScrollAnimation animateIn="fadeInDown" animateOnce={true} delay={500} offset={0}>
            <img src="/images/uploads/profile.jpg" alt="Morgan Spencer" className="mb-6 h-36 w-36 md:h-48 md:w-48 shadow-lg rounded-full border-4 border-solid border-light" />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={1000}>
            <h1 className="text-center">{blog.name}</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={1500}>
            <h2 className="mb-24 text-center font-normal text-tan">{blog.tagline}</h2>
          </ScrollAnimation>
        </div>
      </section>
      <section className="py-24 px-wrap min-h-screen-3/4 relative">
        <div className="absolute top-0 left-0 w-full h-full pattern-cross-dots-md text-tan z-0 opacity-30" aria-hidden="true" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
              <h2 className="heading-underline">Portfolio</h2>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
              <Link href="/portfolio">
                <a className="text-xl flex items-center mb-8 font-bold">
                  View More <RiArrowRightLine />
                </a>
              </Link>
            </ScrollAnimation>
          </div>
          <div className="grid lg:grid-cols-2 gap-y-8 gap-x-12">
            {projects.slice(0,2).map((project, i) => (
              <ScrollAnimation key={i} animateIn={i % 2 == 0 ? 'fadeInLeft' : 'fadeInRight'} animateOnce={true} delay={i * 300} offset={0}>
                <ProjectItem project={project} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-wrap relative md:min-h-screen-3/4 flex items-center bg-dark text-light">
        <div className="absolute top-0 left-0 w-full h-full pattern-cross-dots-md text-navy z-0 opacity-30" aria-hidden="true" />
        <div className="flex flex-col md:items-center justify-between w-full relative z-10 md:flex-row">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <p className="text-xl md:text-3xl max-w-2xl relative z-10"><strong>Full Stack Web Developer</strong> with experience building websites and web applications. Specializing in modern JavaScript technologies with an emphasis on front-end design and development with back-end API services.</p>
          </ScrollAnimation>
          <div className="mt-12 md:mt-0 md:ml-12">
            <div className="flex items-center md:justify-end mb-1">
              <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
                <a href="https://twitter.com/morganmspencer" target="_blank" rel="noopener noreferrer" className="block text-3xl md:text-5xl mr-2 md:mr-4">
                  <RiTwitterFill />
                  <span className="sr-only">Twitter</span>
                </a>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={600}>
                <a href="https://github.com/morganmspencer" target="_blank" rel="noopener noreferrer" className="block text-3xl mr-3 md:text-5xl">
                  <RiGithubFill />
                  <span className="sr-only">GitHub</span>
                </a>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={900}>
                <a href="https://www.linkedin.com/in/morganmspencer/" target="_blank" rel="noopener noreferrer" className="block text-3xl md:text-5xl">
                  <RiLinkedinFill />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={900}>
              <p className="text-2xl md:text-3xl">@morganmspencer</p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <section className="py-24 relative px-wrap">
        <div className="absolute top-0 left-0 w-full h-full pattern-cross-dots-md text-tan z-0 opacity-30" aria-hidden="true" />
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h2 className="heading-underline">Experience</h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 gap-y-8 gap-x-12">
          {experiences.map((experience, i) => (
            <ScrollAnimation key={i} animateIn={i % 2 == 0 ? 'fadeInLeft' : 'fadeInRight'} animateOnce={true} delay={i * 300} offset={0}>
              <p className="font-bold text-sm uppercase text-navy">{experience.start_year} - {experience.end_year ? experience.end_year : 'Present'}</p>
              <h3 className="h4">{experience.title}</h3>
              <p className="text-xl mb-3">{experience.company}</p>
              <div className="text-lg leading-snug" dangerouslySetInnerHTML={{__html: experience.content}} />
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h2 className="heading-underline mt-24">Education</h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 gap-y-8 gap-x-12">
          {educations.map((education, i) => (
            <ScrollAnimation key={i} animateIn={i % 2 == 0 ? 'fadeInLeft' : 'fadeInRight'} animateOnce={true} delay={i * 300} offset={0}>
              <p className="font-bold text-sm uppercase text-navy">{education.start_year} - {education.end_year ? education.end_year : 'Present'}</p>
              <h3 className="h4">{education.title}</h3>
              <p className="text-xl mb-3">{education.college}</p>
              <div className="text-lg leading-snug" dangerouslySetInnerHTML={{__html: education.content}} />
            </ScrollAnimation>
          ))}
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const experiences = getExperiences()
  const educations = getEducations()
  const projects = getProjects()
  const types = getProjectTypes()

  return {
    props: { experiences, educations, projects, types },
  }
}
