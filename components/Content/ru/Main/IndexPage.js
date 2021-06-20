import { MainLayout } from '../../../Layouts/MainLayout.js'
import AddressMap from '../../../ui/AddressMap'
import Link from 'next/link'

export default function IndexPage() {
    return (

        <MainLayout title="Säästu Autorent Tallinnas">

            <section className="home-main">
            <h1>Экономьте на <span className="red"> аренде авто </span>в Таллинне</h1>
                <p className="subtitle"><span className="uppercase red">RED</span> Autorent - это недорогая аренда экономичных автомобилей в Таллинне по доступным ценам, начиная от <span className="red bold">6.66 евро в сутки.</span></p>
                <div className="advantages">
                    <div className="advantage">
                        <img src="/images/content/home/icons/p1b1i1.svg" />
                        <span>Авто в отличном техническом состоянии</span>
                    </div>
                    <div className="advantage">
                        <img src="/images/content/home/icons/p1b1i2.svg" />
                        <span>Автомобили с бензиновыми, дизельными и газовыми двигателями</span>
                    </div>
                    <div className="advantage">
                        <img src="/images/content/home/icons/p1b1i3.svg" />
                        <span>При аренде более 3 месяцев делаем скидку</span>
                    </div>
                </div>
                <Link href="/autod"><button className="button">Бронировать</button></Link>
            </section>
            <section className="home-about">
                <div className="home-about__text">
                    <h2><span className="red">Кто </span> мы?</h2>
                    <p><span className="red">RED</span> Autorent Предлагает арендные автомобили по выгодным ценам, как частным клиентам, так и юридическим лицам. Вы можете использовать автомобиль для личных целей, а также можете еспользовать для зарабатывания денег курьером, используя такие платформы, как <span className="red bold">BOLT и BOLT FOOD, WOLT, YANDEX.</span></p>
                    <p>Автомобили от <span className="red">RED</span> Autorent  Всегда ухожаные, регулярно и качественно обслужаны, и в отличном техническом состоянии. У нас имеются  автомобили с <span className="red">бензиновыми, так и с дизельными и газовыми двигателями.</span></p>
                    <p>Вы можете арендовать понравившийся автомобиль на период от одного для до целого года, Для периода аренды на период более трёх месяцев, мы сделаем более выгодное предложение. </p>
                </div>
                <img src="/images/content/home/image_about.jpg" />
            </section>
            <section className="home-rentida">
                <div className="home-rentida__header">
                    <h2>Как <span className="red">арендовать автомобили</span></h2>
                    <p>Оформление и передача автомобиля занимает <br /><span className="red">не более 10 минут.</span></p>
                    <Link href="/autod"><button className="button home-rentida__button">Бронировать</button></Link>
                </div>
                <div className="home-rentida__cards">
                    <div className="home-rentida__card">
                        <img src="/images/content/home/icons/p1b3i1.svg" />
                        <h4>Водительские права</h4>
                        <p><span className="home-rentida__card-number bold">01</span>Стаж вождения не менее <span className="red">2 лет</span></p>
                    </div>
                    <div className="home-rentida__card">
                        <img src="/images/content/home/icons/p1b3i2.svg" />
                        <h4>Заявка</h4>
                        <p><span className="home-rentida__card-number bold">02</span>Сообщить период аренды</p>
                    </div>
                    <div className="home-rentida__card">
                        <img src="/images/content/home/icons/p1b3i3.svg" />
                        <h4>Депозит</h4>
                        <p><span className="home-rentida__card-number bold">03</span>Иметь залоговую сумму в размере <span className="red">200 €</span></p>
                    </div>
                </div>
            </section>
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