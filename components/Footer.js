import { useContext, useEffect, useState } from 'react'
import Link from "next/link"
import { StoreContext } from '../store/store'
import { LINKS } from './Constants'


export default function Footer() {
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
            title: lang == 'et' ? "autod" : lang == 'en' ? 'cars' : lang == 'ru' && 'авто',
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

    return (
        <footer>
            <section className="footer">
                <div className="footer-elements">
                    <div className="footer-logo">
                        <img className="logo" src="/images/logo-white.svg" />
                    </div>
                    <div className="footer-menu">
                        <ul>
                            {menuItems.map(item => <li key={item.href}><Link href={item.href}><a>{item.title}</a></Link></li>)}
                        </ul>
                    </div>
                    <ul className="footer-address">
                        <h4>Red Autorent OÜ</h4>
                        <li>Reg.nr: 14576442</li>

                        <li><a href={LINKS.mapAddress} target="_blank">Akadeemia tee 6, Tallinn Estonia, 12611</a></li>
                    </ul>
                    <ul className="footer-bank">
                        <h4>Swedbank</h4>
                        <li><span className="bold">IBAN</span> EE812200221070224653</li>
                        <li><span className="bold">SWIFT</span> HABAEE2X</li>
                    </ul>
                    <ul className="footer-contacts">
                        <li className="footer__email">
                            <a href={LINKS.email}>
                                <div className="email">redautorent@gmail.com</div>
                            </a>
                        </li>
                        <li className="footer__phone">
                            <a href={LINKS.phone}>
                                <div className="icon icon__phone"></div>
                                <div className="phone-number">+372 5535603</div>
                            </a>
                        </li>
                        <li className="footer__social">
                            <a href={LINKS.facebook} target="_blank">
                                <div className="icon icon__facebook"></div>
                            </a>
                            <a href={LINKS.instagram} target="_blank">
                                <div className="icon icon__instagram"></div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    © Red Autorent OÜ, 2021
                    </div>
            </section>
        </footer>
    )
}