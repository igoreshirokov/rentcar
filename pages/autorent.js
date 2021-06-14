import { useContext } from 'react'
import { BASE_URL } from '../components/Constants'
import { StoreContext } from '../store/store'
import dynamic from 'next/dynamic'

export default function Autorent({ data }) {

    const ctx = useContext(StoreContext)
    const { lang } = ctx.state
    const AutorentPage = dynamic(() => import(`../components/Content/${lang}/Autorent/AutorentPage`))
    
    return <AutorentPage data={data} />
}

Autorent.getInitialProps = async (ctx) => {
    const res = await fetch(BASE_URL + "api/car/" + ctx.query.id)
    const json = await res.json()
    return {
        data: {
            car: json,
            status: 200
        }
    }
}

