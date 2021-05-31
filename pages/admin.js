
import { AdminCarCard } from '../components/Content/Admin/AdminCarCard.js'
import { MainLayout } from '../components/Layouts/MainLayout.js'
import styles from '../styles/admin.module.sass'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../components/Constants'
import { useRouter } from "next/router"
import { signIn, signout, signOut, useSession } from "next-auth/client"

export default function Admin({ data }) {
    const [cars, setCars] = useState(false)
    const [session, loading] = useSession()
    const [catalog, setCatalog] = useState([])
    const router = useRouter()


    useEffect(async () => {
        try {
            const res = await fetch(BASE_URL + "api/catalog")
            // const res = await fetch(process.env.BASE_URL + "/api/catalog")
            const json = await res.json()
            setCars(json)
            // return { data: { cars: json, status: 200 } }
        } catch (e) {
            console.log(e)
            // return { data: { cars: null, status: 403 } }
        }
    }, [data])
    if (data.status === 403) {

    }

    useEffect(() => {
        // console.log(data)
        if (data.status === 200) {
            setCars(data.cars)
        }
    }, [data])

    if (loading) {
        return <p>Loading...</p>
    }

    function toLoginPage() {
        // setTimeout(() => {
        router.push('/admin/login')
        // }, 2000)
    }

    if (!session) {
        toLoginPage()
    } else {
        console.log(session)
    }


    return (
        <MainLayout title="Home">
            {!session ? <p>Need authorization</p> : (
                <>
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
                            <button className="button__light">Lisage sõiduk</button>
                        </div>
                    </section>
                    <section className="autod-cars">

                        {cars === false ? (
                            <div className="loading">Loading...</div>
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


Admin.getInitialProps = async (ctx) => {
    try {
        const res = await fetch(process.env.BASE_URL + "api/catalog")
        // const res = await fetch(process.env.BASE_URL + "/api/catalog")
        const json = await res.json()
        return { data: { cars: json, status: 200 } }
    } catch (e) {
        return { data: { cars: null, status: 403 } }
    }
}
