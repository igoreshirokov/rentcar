import 'swiper/swiper-bundle.min.css'
import '../styles/globals.sass'
import { CatalogContextProvider } from '../store/store'
import { Provider } from 'next-auth/client'
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <CatalogContextProvider>
        <Component {...pageProps} />
      </CatalogContextProvider>
    </Provider>
  )
}

export default MyApp
