import { CarCard } from './CarCard.js'
import { MainLayout } from '../../../Layouts/MainLayout.js'
import { FetchLoading } from '../../../ui/FetchLoading'
import { StoreContext } from '../../../../store/store'
import { useContext } from 'react'
import Link from 'next/link'

export default function AutodPage() {
    const ctx = useContext(StoreContext)
    const { catalog } = ctx.state


    return (
        <MainLayout title="Vehicles">
            <section className="autod-head">
            <div className="auto-head__title">
                <h2>Vehicles</h2>
                <p><span className="red bold">RED</span> <span className="bold">Autorent</span> offers some of the most competitive rates in Tallinn, with our prices starting at  <span className="red bold">€6.66 per day or €200 per month.</span></p>
            </div>
            </section>
            <section className="autod-cars">

                {catalog === false ? (
                    <FetchLoading />
                ) : catalog.map(car => {
                    return (
                        <CarCard key={car.id.toString()} car={car} />
                    )
                })
                }


            </section>
        </MainLayout>
    )

}
