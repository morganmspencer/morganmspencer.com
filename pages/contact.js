import MetaHead from 'components/MetaHead'
import HeaderBanner from 'components/HeaderBanner'
import ScrollAnimation from 'react-animate-on-scroll'
import { RiMailLine, RiAccountCircleLine, RiMapPinLine, RiTwitterFill, RiGithubFill, RiLinkedinFill } from 'react-icons/ri'

function ContactItem(props) {
  const { icon, title, children } = props

  return (
    <div>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <h2 className="flex items-center">
          <span className="mr-4">{icon}</span>
          {title}
        </h2>
      </ScrollAnimation>
      <div className="text-xl mt-4">
        {children}
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <article className="flex-1 flex flex-col">
      <MetaHead title="Contact" />
      <HeaderBanner>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <h1 className="heading-underline">Contact</h1>
        </ScrollAnimation>
      </HeaderBanner>
      <section className="flex-1 relative py-24 px-wrap flex items-center">
        <div className="absolute top-0 left-0 w-full h-full pattern-cross-dots-md text-tan z-0 opacity-30" aria-hidden="true" />
        <div className="grid md:grid-cols-3 gap-12 relative z-10 w-full">
          <ContactItem icon={<RiMailLine />} title="Email">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
              <p><a href="mailto:hello@morganmspencer.com">hello@morganmspencer.com</a></p>
            </ScrollAnimation>
          </ContactItem>
          <ContactItem icon={<RiAccountCircleLine />} title="Connect">
            <div className="flex items-center">
              <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
                <a href="https://twitter.com/morganmspencer" target="_blank" rel="noopener noreferrer" className="block text-3xl md:text-4xl mr-4">
                  <RiTwitterFill />
                  <span className="sr-only">Twitter</span>
                </a>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={600}>
                <a href="https://github.com/morganmspencer" target="_blank" rel="noopener noreferrer" className="block mr-3 text-3xl md:text-4xl">
                  <RiGithubFill />
                  <span className="sr-only">GitHub</span>
                </a>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={900}>
                <a href="https://www.linkedin.com/in/morganmspencer/" target="_blank" rel="noopener noreferrer" className="block text-3xl md:text-4xl">
                  <RiLinkedinFill />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </ScrollAnimation>
            </div>
          </ContactItem>
          <ContactItem icon={<RiMapPinLine />} title="Location">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
              <p>
                <a href="https://www.google.com/maps/place/Mt+Pleasant,+SC/" target="_blank" rel="noopener noreferrer">
                  Mount Pleasant, South Carolina, US
                </a>
              </p>
            </ScrollAnimation>
          </ContactItem>
        </div>
      </section>
    </article>
  )
}
