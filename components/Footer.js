export default function Footer () {
    return (
        <footer>
                <section className="footer">
                    <div className="footer-elements">
                        <div className="footer-logo">
                            <img className="logo" src="/images/logo-white.svg" />
                        </div>
                        <div className="footer-menu">
                            <ul>
                                <li><a>ettevõtte</a></li>
                                <li><a>Autod</a></li>
                                <li><a>Renditingimused</a></li>
                            </ul>
                        </div>
                        <div className="footer-address">
                            <h4>Red Autorent OÜ</h4>
                            <p>Reg.nr: 14576442</p>
                            
                            <p>Akadeemia tee 6, Tallinn Estonia, 12611</p>
                        </div>
                        <div className="footer-bank">
                            <h4>Swedbank</h4>
                            <p><span className="bold">IBAN</span> EE812200221070224653</p>
                            <p><span className="bold">SWIFT</span> HABAEE2X</p>
                        </div>
                        <div className="footer-contacts">
                            <div className="footer__email">
                                <a href="#">
                                    {/* <div className="icon icon__phone"></div> */}
                                    <div className="email">redautorent@gmail.com</div>
                                </a>
                            </div>
                            <div className="footer__phone">
                                <a href="#">
                                    <div className="icon icon__phone"></div>
                                    <div className="phone-number">+372 5535603</div>
                                </a>
                            </div>
                            <div className="footer__social">
                                <a href="#">
                                    <div className="icon icon__facebook"></div>
                                </a>
                                <a href="#">
                                    <div className="icon icon__instagram"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        © Red Autorent OÜ, 2021
                    </div>
                </section>
            </footer>
    )
}