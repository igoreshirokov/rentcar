import Contacts from "../Content/Contacts"
import Social from "../Content/Social"

const Menu = () => {
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
                <li><a className="menu__item menu__item-active" htmlFor="menu__toggle" href="#contacts">ettevõtte</a></li>
                <li><a className="menu__item" htmlFor="menu__toggle" href="#services">autod</a></li>
                <li><a className="menu__item" htmlFor="menu__toggle" href="#portfolio">Renditingimused</a></li>
                <li><a className="menu__item" htmlFor="menu__toggle" href="#resume">Kontakt</a></li>
                <Contacts />
                <Social />
            </ul>
        </div>
    )
}

export default Menu