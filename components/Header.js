import Menu from "./ui/Menu"
import Contacts from "./Content/Contacts"
import LocaleSwitcher from "./ui/LocaleSwitcher"
import { useMediaQuery } from "react-responsive"


export default function Header() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })

    return (
        // <div className="header">
        <section className="header">
            <div className="header-logo">
                <img className="logo" src="/images/logo.svg" />
            </div>
            { isTabletOrMobile ?
                <>
                    <LocaleSwitcher />
                    <Menu />
                </> : (
                    <>
                        <div className="header-nav">
                            <ul className="topnav">
                                <li><a href="#">ettevõtte</a></li>
                                <li><a href="#">autod</a></li>
                                <li><a href="#">Renditingimused</a></li>
                                <li><a href="#">Kontakt</a></li>
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