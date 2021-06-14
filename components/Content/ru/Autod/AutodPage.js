import { CarCard } from './CarCard.js'
import { MainLayout } from '../../../Layouts/MainLayout.js'

export default function AutodPage({ cars }) {
    return (
        <MainLayout title="Автомобили">
            <section className="autod-breadcrumbs">
                <div className="breadcrumbs">
                    <p>
                        <span className="breadcrumb-parent">Главная/</span>
                        <span className="breadcrumb-current">Автомобили</span>
                    </p>
                </div>
            </section>
            <section className="autod-head">
                <h2>Автомобили</h2>
                <p><span className="red bold">RED</span> <span className="bold">Autorent</span> - Это недорогая аренда экономичных автомобилей в Таллинне по доступным ценам, начиная <span className="red bold"> от 6.66 евро в сутки.
</span></p>
            </section>
            <section className="autod-cars">

                {cars === false ? (
                    <div className="loading">Загрузка...</div>
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
