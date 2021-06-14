import { useContext } from 'react'
import { StoreContext } from '../store/store'
import dynamic from 'next/dynamic'

export default function Home() {
    const ctx = useContext(StoreContext)
    const {lang} = ctx.state
    const IndexPage = dynamic(() => import(`../components/Content/${lang}/Main/IndexPage`))
    return <IndexPage />
}