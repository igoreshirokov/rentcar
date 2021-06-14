import { MainLayout } from '../../../Layouts/MainLayout.js'
import AddressMap from '../../../ui/AddressMap'
import Link from 'next/link'

export default function IndexPage() {
    return (

        <MainLayout title="Säästu Autorent Tallinnas">

            <section className="home-main">
            <h1>Save on <span className="red"> Car Rental </span> in Tallinn </h1>
                <p className="subtitle"><span className="uppercase red">RED</span> Autorent is an affordable car rental company in Tallinn, with prices starting at <span className="red bold"> €6.66 per day.</span></p>
                <div className="advantages">
                    <div className="advantage">
                        <img src="/images/content/home/icons/p1b1i1.svg" />
                        <span>Cars in excellent technical condition</span>
                    </div>
                    <div className="advantage">
                        <img src="/images/content/home/icons/p1b1i2.svg" />
                        <span>Cars with petrol, diesel and gas engines</span>
                    </div>
                    <div className="advantage">
                        <img src="/images/content/home/icons/p1b1i3.svg" />
                        <span>When renting for more than 3 months, we make a discount</span>
                    </div>
                </div>
                <Link href="/autod"><button className="button">Booking</button></Link>
            </section>
            <section className="home-about">
                <div className="home-about__text">
                    <h2><span className="red">Who are </span> we?</h2>
                    <p><span className="red">RED</span> Autorent offers cars at competitive rates to private individuals and companies alike. Our cars can be rented for personal or business use. You can use our cars as a courier for <span className="red bold">BOLT and BOLT FOOD, WOLT, or YANDEX.</span></p>
                    <p><span className="red">RED</span> Autorent offers <span className="red">gasoline, diesel and LPG engine</span> vehicles that are always clean, safe and well maintained.</p>
                    <p>Vehicles can be rented from one day up to a year at a time. Discounts apply for vehicles rented three months or longer.</p>
                </div>
                <img src="/images/content/home/image_about.jpg" />
            </section>
            <section className="home-rentida">
                <div className="home-rentida__header">
                    <h2>How <span className="red">to Rent Cars</span></h2>
                    <p>We will process your application and you will receive a vehicle <br /><span className="red">within 10 minutes.</span></p>
                    <button className="button home-rentida__button">Booking</button>
                </div>
                <div className="home-rentida__cards">
                    <div className="home-rentida__card">
                        <img src="/images/content/home/icons/p1b3i1.svg" />
                        <h4>Driving license</h4>
                        <p><span className="home-rentida__card-number bold">01</span>Valid driving license for at least <span className="red"> 2 years</span></p>
                    </div>
                    <div className="home-rentida__card">
                        <img src="/images/content/home/icons/p1b3i2.svg" />
                        <h4>Request</h4>
                        <p><span className="home-rentida__card-number bold">02</span>Let us know your desired dates</p>
                    </div>
                    <div className="home-rentida__card">
                        <img src="/images/content/home/icons/p1b3i3.svg" />
                        <h4>Deposit</h4>
                        <p><span className="home-rentida__card-number bold">03</span>Make sure to be able to provide a security deposit of <span className="red">200€</span></p>
                    </div>
                </div>
            </section>
            <section className="home-contacts">
                <div className="home-contacts__info">
                    <h2>Contact <span className="red"> us</span></h2>
                    <p>Fast customer service is extremely important to us. Contact us in a way that suits you and we will answer you as soon as possible.</p>
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