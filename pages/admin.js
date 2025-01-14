
import { AdminCarCard } from '../components/Content/Admin/AdminCarCard.js'
import { MainLayout } from '../components/Layouts/MainLayout.js'
import styles from '../styles/admin.module.sass'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../components/Constants'
import { useRouter } from "next/router"
import { signIn, signout, signOut, useSession } from "next-auth/client"
import { PopupSettings } from '../components/Content/Admin/PopupSettings'
import { FetchLoading } from '../components/ui/FetchLoading'

export default function Admin() {
    const [cars, setCars] = useState(false)
    const [session, loading] = useSession()
    const [settingsOn, setSettingsOn] = useState(false)
    const router = useRouter()

    function settingsHundler() {
        setSettingsOn(!settingsOn)
    }

    useEffect(async () => {
        try {
            const res = await fetch(BASE_URL + "api/catalog")
            const json = await res.json()
            setCars(json)
        } catch (e) {
            console.log(e)
        }
    }, [])

    if (loading) {
        return <FetchLoading />
    }

    function toLoginPage() {
        router.push('/admin/login')
    }

    if (!session) {
        toLoginPage()
    }

    const defaultCar = {
        id: null,
        model: 'model',
        Year: 2005,
        Engine: '1.5',
        Fuel: 'Bensiin 95',
        Transmission: 'Auto',
        Doors: 5,
        Consumption: 6,
        Day: 0,
        Sixday: 0,
        Week: 0,
        Month: 0,
        Images: JSON.stringify([]),
    }

    return (
        <MainLayout admin={true} title="Administrator">
            {!session ? <p>Need authorization</p> : (
                <>
                    {settingsOn && <PopupSettings typeSubmit="create" car={defaultCar} close={settingsHundler} />}
                    <section className="autod-breadcrumbs">
                        <div className="breadcrumbs">
                            <p>
                                <span className="breadcrumb-parent">{session.user.name}</span>
                                <button onClick={signOut} className={`button__light ${styles['admin-logout-button']}`}>Log out</button>
                            </p>
                        </div>
                    </section>
                    <section className={`autod-head ${styles["admin-autod-head"]}`}>
                        <div className="autod-admin-title">
                            <h2>Autod</h2>
                        </div>
                        <div className={styles["admin-autod-subtitle"]}>
                            <p>Hoolitseme oma klientide eest ja pakume laia valikut teenuseid</p>
                            <button onClick={settingsHundler} className="button__light">Lisage sõiduk</button>
                        </div>
                    </section>
                    <section className="autod-cars">

                        {cars === false ? (
                            <FetchLoading />
                        ) : cars.map(car => {
                            return (
                                <AdminCarCard key={car.id.toString()} car={car} />
                            )
                        })
                        }

                    </section>
                </>
            )}

        </MainLayout>
    )
}

