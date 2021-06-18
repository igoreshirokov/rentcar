import 'swiper/swiper-bundle.min.css'
import '../styles/globals.sass'
import { StoreContextProvider } from '../store/store'
import { Provider } from 'next-auth/client'
import { FormContextProvider } from '../store/formContext'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Router from 'next/router'
import { FetchLoading } from '../components/ui/FetchLoading'
import { useState } from 'react'


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url) => {

    setLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {

    setLoading(false)
  })


  return (
    <Provider session={pageProps.session}>
      <StoreContextProvider>
        <FormContextProvider>
          {loading && <FetchLoading />}
          <Component {...pageProps} />
        </FormContextProvider>
      </StoreContextProvider>
    </Provider>
  )
}

export default MyApp
