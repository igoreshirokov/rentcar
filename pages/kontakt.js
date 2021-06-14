import { useContext } from 'react'
import { StoreContext } from '../store/store'
import dynamic from 'next/dynamic'

export default function Kontakt() {
    const ctx = useContext(StoreContext)
    const { lang } = ctx.state
    const ContactPage = dynamic(() => import(`../components/Content/${lang}/Contacts/ContactPage`))
    
    return <div className="contact-page"><ContactPage /></div>
}