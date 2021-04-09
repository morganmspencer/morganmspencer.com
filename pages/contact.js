import MetaHead from 'components/MetaHead'
import HeaderBanner from 'components/HeaderBanner'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Contact() {
  return (
    <article>
      <MetaHead title="Contact" />
      <HeaderBanner>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <h1 className="heading-underline">Contact</h1>
        </ScrollAnimation>
      </HeaderBanner>
    </article>
  )
}
