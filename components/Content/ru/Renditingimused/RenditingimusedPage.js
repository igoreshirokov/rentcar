import { MainLayout } from '../../../Layouts/MainLayout'

export default function RenditingimusedPage() {
    return (
        <MainLayout title={'Renditingimused'}>
            <section className="autod-breadcrumbs">
                <div className="breadcrumbs">
                    <p>
                        <span className="breadcrumb-parent">Главная/</span>
                        <span className="breadcrumb-current">Условия аренды</span>
                    </p>
                </div>
            </section>
            <section className="renditingimused-head">
                <h2>Условия аренды</h2>
                <p>Пожалуйста, внимательно ознакомьтесь с условиями аренды перед бронированием автомобиля.</p>
            </section>
            <section className="renditingimused-main">
                <ul className="renditingimused-list">
                    <li>
                        Mинимальный возраст водителя не менее <span className="red bold">21 года</span> и водительский стаж — минимум 2 года. К водителям младше 23 лет может быть применен дополнительный сбор. Водительские права должны быть на латинице или клиент должен иметь международные водительские права.
                    </li>
                    <li>
                        При аренде автомобиля взымается залоговая сумма в размере 200 евро, которая  возвращается клиенту при возврате автомобиля.
                    </li>
                    <li>
                        Aвтомобили предоставляются с полным баком топлива и должны быть возвращены тaк же с полным баком. Недостающее топливо клиент обязан оплатить согласно топливному тарифу компании  <span className="red bold">RED </span> <span className="bold">Autorent</span> , что составляет <span className="red">1.50 Евро/литр</span>.
                    </li>
                    <li>
                        Автомобиль передаётся клиенту чистым, как внутри, так и снаружи, клиент обязуется возвращать автомобиль в такомже  состоянии. В случае возврата автомобиля в грязном виде с залоговой суммы будет удерживаться <span className="red bold">25 евро</span>, если грязный салон, и <span className="red bold">25 евро</span>, если автомобиль грязный снаружи.
                    </li>
                    <li>
                        В Арендных автомобилях <span className="red bold">RED </span> <span className="bold">Autorent</span> <span className="red bold">НЕЛЬЗЯ  курить!</span> Вслучае, если автомобиль возвращается с прокуренным салоном, то с залога удерживается <span className="red bold">150 евро</span> на химчистку салона.
                    </li>
                    <li>
                        Ответственность за штрафы, как за срорость, так и за парковку несет арендатор.
                    </li>
                    <li>
                        В случае, если Вы хотите выехать на арендном автомобиле за пределы Эстонии Вы обязаны оповестите об представителя <span className="red bold">RED </span> <span className="bold">Autorent</span>, в противном случае вы потеряете залоговую сумму.
                    </li>
                    <li>
                        При возникновении аварии необходимо сообщить о ДТП в компанию <span className="red bold">RED </span> <span className="bold">Autorent</span>.
                    </li>
                    <li>
                        Если возникла поломка автомобиля не связанная с виной водителя, и автомобиль не может эксплуатироваться дальше, то <span className="red bold">RED </span> <span className="bold">Autorent</span> предоставит вам другой автомобить.
                    </li>
                </ul>
            </section>
        </MainLayout>
    )
}