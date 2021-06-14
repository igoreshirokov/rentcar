import { MainLayout } from "../../../Layouts/MainLayout";
import AddressMap from '../../../ui/AddressMap'

export default function ContactPage ( ) {
    return (
        <MainLayout title={'Contact'}>
            <section className="home-contacts">
                <div className="home-contacts__info">
                <h2>Võtke <span className="red">meiega ühendust</span></h2>
                    <p>Kiire klienditeenindus on meie jaoks ülimalt oluline. Võtke meiega endale sobival viisil ühendust ja vastame Teile esimesel võimalusel.</p>
                    <h4>Red Autorent OÜ</h4>
                    <span>Reg.nr: 14576442</span>
                    <p><div className="icon icon__marker"></div>Akadeemia tee 6, Tallinn (Tallinna Tehnikaülikooli / TalTech vastas). Estonia, 12611</p>
                    <h4><div className="icon icon__phone-red"></div><a href="tel:+3725535603">+3725535603</a></h4>
                    <span><a href="mail:redautorent@gmail.com">redautorent@gmail.com</a></span>
                </div>
                <div className="home-contacts__map">
                    <AddressMap />
                </div>
            </section>
        </MainLayout>
    )
}