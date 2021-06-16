import { MainLayout } from '../../../Layouts/MainLayout.js'
import AddressMap from '../../../ui/AddressMap'
import Link from 'next/link'

export default function IndexPage() {
    return (

        <MainLayout title="Säästu Autorent Tallinnas">

            <section className="home-main">
                <h1>Säästu <span className="red">Autorent</span> Tallinnas</h1>
                <p className="subtitle"><span className="uppercase red">RED</span> Autorent on soodsate hindadega ökonoomsete autode rent Tallinnas alates <span className="red bold">6.66 eurot/ööpäev</span></p>
                <div className="advantages">
                    <div className="advantage">
                        <img src="/images/content/home/icons/p1b1i1.svg" />
                        <span>Suurepärases tehnilises korras autod</span>
                    </div>
                    <div className="advantage">
                        <img src="/images/content/home/icons/p1b1i2.svg" />
                        <span>Bensiini-, diisel- ja gaasimootoritega autod</span>
                    </div>
                    <div className="advantage">
                        <img src="/images/content/home/icons/p1b1i3.svg" />
                        <span>Üle 3-kuulise rendiperioodi puhul teeme allahindlust</span>
                    </div>
                </div>
                <Link href="/autod"><button className="button">Broneeri</button></Link>
                
            </section>
            <section className="home-about">
                <div className="home-about__text">
                    <h2><span className="red">Kes me</span> oleme?</h2>
                    <p><span className="red">RED</span> Autorent pakub soodsate hindadega rendiautosid nii eraklientidele kui ka juriidilistele isikutele. Autot võite kasutada isiklikuks otstarbeks, samuti kullerina raha teenimiseks sellistel platvormidel nagu <span className="red bold">BOLT ja BOLT FOOD, WOLT, YANDEX.</span></p>
                    <p><span className="red">RED</span> Autorenti autod on alati puhtad, regulaarselt ja tõhusalt hooldatud ning suurepärases tehnilises seisukorras. Meil on nii <span className="red"> bensiini-, diisli- kui ka gaasimootoriga autosid.</span></p>
                    <p>Saate endale rentida meelepärase auto alates ühest päevast kuni terve aastani. Kolme kuud ületava rendiperioodi korral esitame parema pakkumise.</p>
                </div>
                <img src="/images/content/home/image_about.jpg" />
            </section>
            <section className="home-rentida">
                <div className="home-rentida__header">
                    <h2>Kuidas autod <span className="red">rentida</span></h2>
                    <p>Auto vormistamiseks ja üleandmiseks kulub <br /><span className="red">max 10 minutit.</span></p>
                    <Link href="/autod"><button className="button home-rentida__button">Broneeri</button></Link>
                </div>
                <div className="home-rentida__cards">
                    <div className="home-rentida__card">
                        <img src="/images/content/home/icons/p1b3i1.svg" />
                        <h4>Juhiluba</h4>
                        <p><span className="home-rentida__card-number bold">01</span>Kehtiv juhiluba vähemalt <span className="red">2 aastat</span></p>
                    </div>
                    <div className="home-rentida__card">
                        <img src="/images/content/home/icons/p1b3i2.svg" />
                        <h4>Teata</h4>
                        <p><span className="home-rentida__card-number bold">02</span>Rendiperioodi teatamine</p>
                    </div>
                    <div className="home-rentida__card">
                        <img src="/images/content/home/icons/p1b3i3.svg" />
                        <h4>Jäta tagatisraha</h4>
                        <p><span className="home-rentida__card-number bold">03</span>Tagatisraha summas <span className="red">200€</span></p>
                    </div>
                </div>
            </section>
            <section className="home-contacts">
                <div className="home-contacts__info">
                    <h2>Võtke <span className="red">meiega ühendust</span></h2>
                    <p>Kiire klienditeenindus on meie jaoks ülimalt oluline. Võtke meiega endale sobival viisil ühendust ja vastame Teile esimesel võimalusel.</p>
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