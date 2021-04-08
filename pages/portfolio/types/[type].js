import Link from 'next/link'
import { getProjectTypes, getProjectTypeBySlug } from 'pages/api/project-types'
import MetaHead from 'components/MetaHead'
import HeaderBanner from 'components/HeaderBanner'
import ScrollAnimation from 'react-animate-on-scroll'
const blog = require('nmbs.config.json')

export default function Type({ types }) {

  return (
    <>
      <MetaHead title="Types" />
      <HeaderBanner>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={300}>
          <h1 className="mb-2">Types</h1>
        </ScrollAnimation>
      </HeaderBanner>
    </>

  )
}

export async function getStaticPaths() {
  const types = getProjectTypes()

  return {
    paths: types.map((type) => {
      return {
        params: {
          type: type.slug,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const types = getProjectTypeBySlug(params.type)

  return {
    props: {
      types: types,
    },
  }
}
