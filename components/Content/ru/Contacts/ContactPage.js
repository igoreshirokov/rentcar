import { MainLayout } from "../../../Layouts/MainLayout";
import AddressMap from '../../../ui/AddressMap'
export default function ContactPage() {
    return (
        <MainLayout title={'Kontakt'}>
            <section className="home-contacts">
                <div className="home-contacts__info">
                    <h2>Свяжитесь <span className="red">с нами</span></h2>
                    <p>Для нас очень важно быстрое обслуживание клиентов. Свяжитесь с нами удобным для вас способом, и мы ответим вам как можно скорее.</p>
                    <h4>Red Autorent OÜ</h4>
                    <span>Reg.nr: 14576442</span>
                    <p><i className="icon icon__marker"></i>Akadeemia tee 6, Tallinn (Tallinna Tehnikaülikooli / TalTech vastas). Estonia, 12611</p>
                    <h4><i className="icon icon__phone-red"></i><a href="tel:+3725535603">+3725535603</a></h4>
                    <span><a href="mail:redautorent@gmail.com">redautorent@gmail.com</a></span>
                </div>
                <div className="home-contacts__map">
                    <AddressMap />
                </div>
            </section>
        </MainLayout>
    )
}