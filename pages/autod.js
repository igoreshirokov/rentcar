import { useContext, useEffect, useState } from 'react'
import { BASE_URL } from '../components/Constants'
import { StoreContext } from '../store/store'
import dynamic from 'next/dynamic'

export default function Autod({ data }) {
    const ctx = useContext(StoreContext)
    const { lang } = ctx.state
    const AutodPage = dynamic(() => import(`../components/Content/${lang}/Autod/AutodPage`))

    const [cars, setCars] = useState(false)
    useEffect(async () => {
        try {
            const res = await fetch(BASE_URL + "api/catalog")
            const json = await res.json()

            setCars(json)
        } catch (e) {
            console.log(e)
        }
    }, [data])
    if (data.status === 403) {

    }

    useEffect(() => {
        if (data.status === 200) {
            setCars(data.cars)
        }
    }, [data])


    return <AutodPage cars={cars} />
}

Autod.getInitialProps = async (ctx) => {
    try {
        const res = await fetch(process.env.BASE_URL + "api/catalog")
        // const res = await fetch(process.env.BASE_URL + "/api/catalog")
        const json = await res.json()
        return { data: { cars: json, status: 200 } }
    } catch (e) {
        return { data: { cars: null, status: 403 } }
    }
}