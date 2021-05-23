
import { CarCard } from '../components/Content/Autod/CarCard.js'
import { MainLayout } from '../components/Layouts/MainLayout.js'

export default function Autod() {
    const cars = [
        {
            id: 1,
            carParameters: {
                "Auto": "Dacia Logan Sedan",
                "Aasta": "2006a.",
                "Mootor": "1.4 54 kW",
                "Kütus": "Bensiin 95",
                "Käigukast": "Manuaal",
                "Uste arv": "5",
                "Kütusekulu": "6 Liitrit/100 km"
            },
            priceParameters: {
                "1 Päev": "25 €",
                "1-6 Päeva": "15 € /päev",
                "1 Nädal": "75 €",
                "1 Kuu": "200 € (6.66 € /päev)",
            },
            images: [
                "/images/content/autod/dacia_logan/dacia_logan_1.png",
                "/images/content/autod/dacia_logan/dacia_logan_2.png",
                "/images/content/autod/dacia_logan/dacia_logan_3.png",
                "/images/content/autod/dacia_logan/dacia_logan_4.png",
                "/images/content/autod/dacia_logan/dacia_logan_5.png",
            ]
        },
        {
            id: 1,
            carParameters: {
                "Auto": "Dacia Logan Sedan",
                "Aasta": "2006a.",
                "Mootor": "1.4 54 kW",
                "Kütus": "Bensiin 95",
                "Käigukast": "Manuaal",
                "Uste arv": "5",
                "Kütusekulu": "6 Liitrit/100 km"
            },
            priceParameters: {
                "1 Päev": "25 €",
                "1-6 Päeva": "15 € /päev",
                "1 Nädal": "75 €",
                "1 Kuu": "200 € (6.66 € /päev)",
            },
            images: [
                "/images/content/autod/dacia_logan/dacia_logan_1.png",
                "/images/content/autod/dacia_logan/dacia_logan_2.png",
                "/images/content/autod/dacia_logan/dacia_logan_3.png",
                "/images/content/autod/dacia_logan/dacia_logan_4.png",
                "/images/content/autod/dacia_logan/dacia_logan_5.png",
            ]
        },
        {
            id: 1,
            carParameters: {
                "Auto": "Dacia Logan Sedan",
                "Aasta": "2006a.",
                "Mootor": "1.4 54 kW",
                "Kütus": "Bensiin 95",
                "Käigukast": "Manuaal",
                "Uste arv": "5",
                "Kütusekulu": "6 Liitrit/100 km"
            },
            priceParameters: {
                "1 Päev": "25 €",
                "1-6 Päeva": "15 € /päev",
                "1 Nädal": "75 €",
                "1 Kuu": "200 € (6.66 € /päev)",
            },
            images: [
                "/images/content/autod/dacia_logan/dacia_logan_1.png",
                "/images/content/autod/dacia_logan/dacia_logan_2.png",
                "/images/content/autod/dacia_logan/dacia_logan_3.png",
                "/images/content/autod/dacia_logan/dacia_logan_4.png",
                "/images/content/autod/dacia_logan/dacia_logan_5.png",
            ]
        },
    ]



    return (

        <MainLayout title="Home">
            <section className="autod-breadcrumbs">
                <div className="breadcrumbs">
                    <p>
                        <span className="breadcrumb-parent">Peamine/</span>
                        <span className="breadcrumb-current">Autod</span>
                    </p>
                </div>
            </section>
            <section className="autod-head">
                <h2>Autod</h2>
                <p>Red Autorent pakub autosid Tallinna madalaimate hindadega, hinnad algavad <span className="red bold">6.66 eurost ööpäevas või 200 eurost kuus.
                </span></p>
            </section>
            <section className="autod-cars">

                {cars.map(car => {
                    return (
                        <CarCard key={car.id.toString()} car={car} />
                    )
                })}

            </section>
        </MainLayout>
    )
}