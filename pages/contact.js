import MetaHead from 'components/MetaHead'

export default function Contact() {
  return (
    <article>
      <MetaHead title="Contact" />
      <header className="min-h-screen-1/2 px-wrap py-12 relative flex items-center bg-dark text-light">
        <div className="absolute top-0 left-0 w-full h-full pattern-cross-dots-md text-navy z-0 opacity-30" aria-hidden="true" />
        <div className="relative z-10 mb-8">
          <h1>Contact</h1>
        </div>
      </header>
    </article>
  )
}
