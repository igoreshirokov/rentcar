
import { AdminCarCard } from '../../components/Content/Admin/AdminCarCard.js'
import { MainLayout } from '../../components/Layouts/MainLayout.js'
import styles from '../../styles/admin.module.sass'


export default function Catalog() {
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
            <section className={`autod-head ${styles["admin-autod-head"]}`}>
                <div className="autod-admin-title">
                    <h2>Autod</h2>
                </div>
                <div className={styles["admin-autod-subtitle"]}>
                    <p>Hoolitseme oma klientide eest ja pakume laia valikut teenuseid</p>
                    <button className="button__light">Lisage sõiduk</button>
                </div>
            </section>
            <section className="autod-cars">

                {cars.map(car => {
                    return (
                        <AdminCarCard key={car.id.toString()} car={car} />
                    )
                })}

            </section>
        </MainLayout>
    )
}