import { LINKS } from '../Constants'

export default function Contacts() {
    return (
        <div className="header-contacts">
            <a href={LINKS.phone} className="header-phone">
                <div className="icon icon__phone-red"></div>
                <div className="phone-number">+372 5535603</div>
            </a>
            <a target="_blank" href={LINKS.mapAddress} className="header-address">
                <div className="icon icon__marker"></div>
                <div className="address">Akadeemia tee 6, Tallinn</div>
            </a>
            <a href={LINKS.email} className="header-email">
                <div className="email">
                    redautorent@gmail.com
                </div>
            </a>
        </div>
    )
}