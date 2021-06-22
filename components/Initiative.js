import ScrollAnimation from 'react-animate-on-scroll'

export default function Initiative(props) {
  const {title, subtitle, image, link, bg, delay} = props
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={delay ? delay : 400} className="flex-1 text-center m-12">
      <p className="font-bold text-lg mb-2">{subtitle}</p>
      <a href={link} target="_blank" rel="noreferrer" className="flex flex-col items-center no-underline">
        <div
          className="h-32 w-32 mb-2 flex items-center justify-center p-5 rounded-full border-4 border-solid border-dark transition-all duration-300 hover:p-3"
          style={{backgroundColor: bg ? bg : 'transparent'}}
        >
          <img src={image} alt={title} className="max-w-full max-h-full" />
        </div>
        <h3>{title}</h3>
      </a>
    </ScrollAnimation>
  )
}
