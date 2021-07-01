import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'
import { useEffect, useState } from 'react'

export const MainLayout = ({ children, title, admin }) => {
    const [isAdmin, setAdmin] = useState(false)
    useEffect(() => {
        admin && setAdmin(true)
    }, [])
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" type="image/svg+xml" href="favicon.svg" />
                <meta name='viewport' content={`width=device-width,initial-scale=1,maximum-scale=1.0`} />
                <meta content='true' name='HandheldFriendly' />
                <meta content='width' name='MobileOptimized' />
                <meta content='yes' name='apple-mobile-web-app- capable' />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}