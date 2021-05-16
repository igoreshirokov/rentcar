import 'swiper/swiper-bundle.min.css'
import '../styles/globals.sass'
import { CatalogContextProvider } from '../store/store'
function MyApp({ Component, pageProps }) {
  return (
      <CatalogContextProvider>
        <Component {...pageProps} />
      </CatalogContextProvider>
  )
}

export default MyApp
