import ScrollAnimation from 'react-animate-on-scroll'

export default function Window(props) {
  const { children, fade, className } = props

  return (
    <ScrollAnimation
      animateIn={fade === 'left' ? 'fadeInLeft' : 'fadeInRight'}
      animateOnce={true}
      className={`${className ? className + ' ' : ''}w-full max-w-3xl rounded-md overflow-x-hidden shadow-md`}
    >
      <div className="bg-gray-200 p-2 flex items-center">
        <div className="w-2 h-2 rounded-full bg-red-400 mr-1" />
        <div className="w-2 h-2 rounded-full bg-yellow-400 mr-1" />
        <div className="w-2 h-2 rounded-full bg-green-400 mr-1" />
      </div>
      <div className="aspect-w-16 aspect-h-9 overflow-y-auto">
        {children}
      </div>
    </ScrollAnimation>
  )
}
