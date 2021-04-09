import theme from '../tailwind.config.js'

export default function HeaderBanner(props) {
  const { children, color, absolute } = props
  return (
    <header
      className={`${absolute ? 'pt-24 pb-12' : 'py-12'} min-h-screen-1/2 px-wrap relative flex items-center bg-dark text-light`}
      style={{backgroundColor: color ? color : theme.theme.extend.colors.dark}}
    >
      <div className="absolute top-0 left-0 w-full h-full pattern-cross-dots-md text-light z-0 opacity-10" aria-hidden="true" />
      <div className="relative z-10 mb-4 w-full">
        {children}
      </div>
    </header>
  )
}
