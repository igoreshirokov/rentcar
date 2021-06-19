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
        <MainLayout title="Автомобили">
            <section className="autod-breadcrumbs">
                <div className="breadcrumbs">
                    <p>
                        <span className="breadcrumb-parent"><Link href="/"><a>Главная/</a></Link></span>
                        <span className="breadcrumb-current">Автомобили</span>
                    </p>
                </div>
            </section>
            <section className="autod-head">
                <h2>Автомобили</h2>
                <p><span className="red bold">RED</span> <span className="bold">Autorent</span> - Это недорогая аренда экономичных автомобилей в Таллинне по доступным ценам, начиная <span className="red bold"> от 6.66 евро в сутки.</span></p>
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
