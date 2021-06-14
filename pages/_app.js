import 'swiper/swiper-bundle.min.css'
import '../styles/globals.sass'
import { StoreContextProvider } from '../store/store'
import { Provider } from 'next-auth/client'
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <StoreContextProvider>
        <Component {...pageProps} />
      </StoreContextProvider>
    </Provider>
  )
}

export default MyApp
