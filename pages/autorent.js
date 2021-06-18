import { useContext } from 'react'
import { BASE_URL } from '../components/Constants'
import { StoreContext } from '../store/store'
import dynamic from 'next/dynamic'

export default function Autorent() {

    const ctx = useContext(StoreContext)
    const { lang } = ctx.state
    const AutorentPage = dynamic(() => import(`../components/Content/${lang}/Autorent/AutorentPage`))
    
    return <AutorentPage />
}
