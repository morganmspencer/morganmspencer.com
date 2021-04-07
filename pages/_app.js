import '../styles/globals.css'
import 'pattern.css'
import Layout from 'components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
