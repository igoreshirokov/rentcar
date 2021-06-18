import Contacts from "../Content/Contacts"
import Social from "../Content/Social"
import Link from "next/link"

const Menu = ({ items }) => {
    function menuHundler(e) {
        document.querySelector("#menu__toggle").checked = false

    }
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            <div onClick={(e) => menuHundler(e)} className="shadow-bg"></div>
            <ul onClick={(e) => menuHundler(e)} className="menu__box">
                {items.map(item => {
                    return (
                        <li key={item.title + item.href} className={item.active ? "menu__item menu__item-active" : 'menu__item'}>
                            <Link href={item.href}>
                                <a htmlFor="menu__toggle">{item.title}</a>
                            </Link>
                        </li>
                    )
                })}
                <Contacts />
                <Social />
            </ul>
        </div>
    )
}

export default Menu