import { CarCard } from './CarCard.js'
import { MainLayout } from '../../../Layouts/MainLayout.js'
export default function AutodPage({ cars }) {
    return (
        <MainLayout title="Autod">
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
                <p><span className="red bold">RED</span> <span className="bold">Autorenti</span>  pakub autosid Tallinna madalaimate hindadega, hinnad algavad <span className="red bold">6.66 eurost ööpäevas või 200 eurost kuus.
</span></p>
            </section>
            <section className="autod-cars">

                {cars === false ? (
                    <div className="loading">Laadimine...</div>
                ) : cars.map(car => {
                    return (
                        <CarCard key={car.id.toString()} car={car} />
                    )
                })
                }


            </section>
        </MainLayout>
    )

}
