export default function Header() {
    return (
        // <div className="header">
            <section className="header">
                <div className="header-logo">
                    <img className="logo" src="/images/logo.svg" />
                </div>
                <div className="header-nav">
                    <ul className="topnav topnav-mobile">
                        <li><a href="#">ettevõtte</a></li>
                        <li><a href="#">autod</a></li>
                        <li><a href="#">Renditingimused</a></li>
                        <li><a href="#">Kontakt</a></li>
                    </ul>
                </div>
                <div className="locale-switcher">
                    <button className="locale locale-active">Es</button>
                    <button className="locale">En</button>
                    <button className="locale">Ru</button>
                </div>
                <div className="header-contacts">
                    <a className="header-phone">
                        <div className="icon icon__phone-red"></div>
                        <div className="phone-number">+372 5535603</div>
                    </a>
                    <a className="header-address">
                        <div className="icon icon__marker"></div>
                        <div className="address">Akadeemia tee 6, Tallinn</div>
                    </a>
                </div>
            </section>
        // </div>
    )
}