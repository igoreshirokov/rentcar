import { useState } from 'react';
import Calendar from '../components/ui/Calendar'
import Time from '../components/ui/Time'

export default function Ui() {

    return (
        <>
            <section>
                <img className="logo" src="/images/logo.svg" />
            </section>
            <section>
                <h2>Icons</h2>
                <div className="icons">
                    <div className="icon icon__phone-red"></div>
                    <div className="icon icon__marker"></div>
                    <div className="icon icon__check"></div>
                    <div className="icon icon__gear"></div>
                    <div className="icon icon__trash"></div>
                    <div className="icon icon__calendar"></div>
                    <div className="icon icon__arrow"></div>
                    <div className="icon icon__clock"></div>
                    <div className="icon icon__close-red"></div>
                    <div className="icon icon__close"></div>
                </div>
            </section>
            <section>
                <h2>Top Navigation</h2>
                <ul className="topnav">
                    <li><a href="#">ettevõtte</a></li>
                    <li><a href="#">autod</a></li>
                    <li><a href="#">Renditingimused</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </section>
            <section>
                <div className="locale-switcher">
                    <a className="locale locale-active" href="#">Es</a>
                    <a className="locale" href="#">En</a>
                    <a className="locale" href="#">Ru</a>
                </div>
            </section>
            <section>
                <h2>Buttons</h2>
                <button className="button">Broneeri</button>
                <button className="button__light">Lisage sõiduk</button>
            </section>
            <section>
                <h2>Forms</h2>
                <form className="form">
                    <label>Nimi
                    <input type="text" name="name" value="Alex"></input>
                    </label>
                    <label>Date
                    <select name="car" className="select__calendar">
                            <option>Dacia</option>
                            <option>Honda</option>
                        </select>
                    </label>
                    <label>Tagastamise kuupäev
                    <Calendar />
                    </label>
                    <label>Tagastuse aeg
                    <Time />
                    </label>
                </form>
            </section>
            <section>
                <h1>Lorem ipsum</h1>
                <h2>Lorem ipsum</h2>
                <h3>Lorem ipsum</h3>
                <h4>Lorem ipsum</h4>
                <h5>Lorem ipsum</h5>
                <h1>Lorem ipsum</h1>
                <h2>Lorem ipsum</h2>
                <h3>Lorem ipsum</h3>
                <h4>Lorem ipsum</h4>
                <h5>Lorem ipsum</h5>
            </section>
            <footer>
                <section>
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
                </section>
            </footer>
        </>
    )
}
