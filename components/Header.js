import Menu from "./ui/Menu"
import Contacts from "./Content/Contacts"
import LocaleSwitcher from "./ui/LocaleSwitcher"
import { useMediaQuery } from "react-responsive"
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import Link from "next/link"
import { StoreContext } from '../store/store'


export default function Header() {
    const ctx = useContext(StoreContext)
    const { lang } = ctx.state

    const menuItems = [
        {
            href: "/",
            title: lang == 'et' ? "ettevõtte" : lang == 'en' ? 'enterprise' : lang == 'ru' && 'предприятие',
            active: 0
        },
        {
            href: "/autod",
            title: lang == 'et' ? "autod" : lang == 'en' ? 'vehicles' : lang == 'ru' && 'автомобили',
            active: 0
        },
        {
            href: "/renditingimused",
            title: lang == 'et' ? "renditingimused" : lang == 'en' ? 'Rental conditions' : lang == 'ru' && 'Условия аренды',
            active: 0
        },
        {
            href: "/kontakt",
            title: lang == 'et' ? "kontakt" : lang == 'en' ? 'contact' : lang == 'ru' && 'контакты',
            active: 0
        },
    ]
    const [menu, setMenu] = useState(menuItems)
    const router = useRouter()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })
    
    useEffect(() => {
        setMenu(
            menuItems.map(item => {
                let currentPage = router.pathname
                if (currentPage == item.href) {
                    item.active = 1
                } else {
                    item.active = 0
                }
                return item
            })
        )
    }, [])

    return (
        // <div className="header">
        <section className="header">
            <div className="header-logo">
                <Link href="/"><a><img className="logo" src="/images/logo.svg" /></a></Link>
            </div>
            { isTabletOrMobile ?
                <>
                    <LocaleSwitcher />
                    <Menu items={menu} />
                </> : (
                    <>
                        <div className="header-nav">
                            <ul className="topnav">
                                {menu.map(item => {
                                    return (
                                        <li key={item.title + item.href} className={item.active ? "topnav__item-active" : ''}>
                                            <Link href={item.href}>
                                                <a>{item.title}</a>
                                            </Link>
                                        </li>

                                    )
                                })}
                            </ul>
                        </div>
                        <LocaleSwitcher />
                    </>
                )

            }

            {!isTabletOrMobile && <Contacts />}
        </section>
        // </div>
    )
}