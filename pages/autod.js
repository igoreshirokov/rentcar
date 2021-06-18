import { useContext, useEffect, useState } from 'react'
import { BASE_URL } from '../components/Constants'
import { StoreContext } from '../store/store'
import dynamic from 'next/dynamic'

export default function Autod({ data }) {
    const ctx = useContext(StoreContext)
    const { lang } = ctx.state
    const { catalog } = ctx.state

    const AutodPage = dynamic(() => import(`../components/Content/${lang}/Autod/AutodPage`))

    useEffect(async () => {
        if (data.status !== 200) {
            try {
                const res = await fetch(BASE_URL + "api/catalog")
                const json = await res.json()
    
                ctx.setCatalog(json)
            } catch (e) {
                console.log(e)
            }
        } else {
            ctx.setCatalog(data.cars)
        }
    }, [data])
    
    return <AutodPage />
}

Autod.getInitialProps = async (ctx) => {
    try {
        const res = await fetch(BASE_URL + "api/catalog")
        const json = await res.json()
        return { data: { cars: json, status: 200 } }
    } catch (e) {
        return { data: { cars: null, status: 403 } }
    }
}