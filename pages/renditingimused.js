import { useContext } from 'react'
import { StoreContext } from '../store/store'
import dynamic from 'next/dynamic'

export default function Renditingimused() {
    const ctx = useContext(StoreContext)
    const { lang } = ctx.state
    const RenditingimusedPage = dynamic(() => import(`../components/Content/${lang}/Renditingimused/RenditingimusedPage`))

    return <RenditingimusedPage />
}