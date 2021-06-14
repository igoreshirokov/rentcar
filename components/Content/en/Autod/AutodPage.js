import { CarCard } from './CarCard.js'
import { MainLayout } from '../../../Layouts/MainLayout.js'

export default function AutodPage({ cars }) {
    return (
        <MainLayout title="Cars">
            <section className="autod-breadcrumbs">
                <div className="breadcrumbs">
                    <p>
                        <span className="breadcrumb-parent">Main/</span>
                        <span className="breadcrumb-current">Cars</span>
                    </p>
                </div>
            </section>
            <section className="autod-head">
                <h2>Cars</h2>
                <p><span className="red bold">RED</span> <span className="bold">Autorent</span> offers some of the most competitive rates in Tallinn, with our prices starting at  <span className="red bold">€6.66 per day or €200 per month.
</span></p>
            </section>
            <section className="autod-cars">

                {cars === false ? (
                    <div className="loading">Loading...</div>
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
