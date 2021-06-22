import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'

export const MainLayout = ({ children, title, admin }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" type="image/svg+xml" href="favicon.svg" />
                <meta name='viewport' content={`width=device-width,initial-scale=1${admin && ',maximum-scale=1.0'}`} />
                <meta content='true' name='HandheldFriendly' />
                <meta content='width' name='MobileOptimized' />
                <meta content='yes' name='apple-mobile-web-app-capable' />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}