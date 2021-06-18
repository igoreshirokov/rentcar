import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'

export const MainLayout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}