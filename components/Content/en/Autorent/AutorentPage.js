import { useContext, useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AutorendiCarCard } from './AutorendiCarCard'
import { MainLayout } from '../../../Layouts/MainLayout'
import Calendar from '../../../ui/Calendar'
import Time from '../../../ui/Time'
import { PopupBroner } from './PopupBroner'
import { AutoSelect } from './AutoSelect'
import { BASE_URL } from '../../../Constants'
import { FetchLoading } from '../../../ui/FetchLoading'
import { FormContext } from '../../../../store/formContext'
import Link from 'next/link'


export default function AutorentPage() {
    const router = useRouter()
    const formContext = useContext(FormContext)
    const formData = formContext.state
    const [errorMessage, setErrorMessage] = useState(false)
    const [loading, setLoading] = useState(false)
    const [popup, setPopup] = useState(false)


    async function sendOrder(data) {
        const request = await fetch(BASE_URL + 'api/broner', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        const response = await request.json()

        return response
    }

    function formHundler() {
        if (formData['name'] && formData['phone']) {
            setLoading(true)

            sendOrder(formData)
                .then(res => {
                    if (res.status == 'ok') {
                        setLoading(false)
                        setPopup(!popup)
                        
                    } else {
                        setLoading(false)
                        setErrorMessage('An error has occurred on the server. Call by phone +3725535603, please.')
                    }
                }).catch(console.error)
        } else {
            setErrorMessage('Name and Phone is required')
        }

    }

    function closePopup() {
        router.push('/kontakt')
    }



    return (
        <MainLayout title="Autorent - request">
            {popup && <PopupBroner close={closePopup} />}
            {errorMessage && <span className="red bold">{errorMessage}</span>}
            {loading && <FetchLoading />}
            <section className="autorendi">
                <div className="breadcrumbs">
                    <span className="breadcrumb-parent"><Link href="/autod"><a>Cars/</a></Link></span>
                    <span className="breadcrumb-current">Rental Enquiry Form</span>

                </div>
                <h2><span className="red">Rental</span> Enquiry Form</h2>
                <p>Fill out the application and our manager will contact you within <span className="red">30 minutes</span></p>
            </section>
            <section className="autorendi-broner">
                <form className="form autorendi-form">
                    <span className="bold">Contact information</span>
                    <div className="form-person">
                        <label>First name:
                         <input type="text" name="name" onChange={(e) => formContext.setForm('SET_NAME', e.target.value)} defaultValue={formContext.name} placeholder="Alex" required></input>
                        </label>
                        <label>Family name:
                         <input type="text" name="surname" placeholder="Petrov" onChange={(e) => formContext.setForm('SET_SURNAME', e.target.value)} defaultValue={formContext.surname}></input>
                        </label>
                        <label>E-mail address:
                         <input type="text" name="email" placeholder="petrov@gmail.com" onChange={(e) => formContext.setForm('SET_EMAIL', e.target.value)} defaultValue={formContext.email}></input>
                        </label>
                        <label>Home address:
                         <input type="text" name="address" placeholder="Vilnus, Krony 44" onChange={(e) => formContext.setForm('SET_ADDRESS', e.target.value)} defaultValue={formContext.address}></input>
                        </label>
                        <label>Phone number:
                         <input type="text" name="phone" placeholder="+ XXX-XX-XXX-XX-XX" onChange={(e) => formContext.setForm('SET_PHONE', e.target.value)} defaultValue={formContext.phone} required></input>
                        </label>
                        <label>Personal id number:
                         <input type="text" name="zip" placeholder="ХХХ" onChange={(e) => formContext.setForm('SET_PERSONALID', e.target.value)} defaultValue={formContext.personalid}></input>
                        </label>
                        <label className="auto-select">Vehicle:
                            <AutoSelect type={'SET_AUTO'} />
                        </label>
                    </div>
                    <span className="bold">Rental period</span>
                    <div className="form-date">
                        <label>Start date:
                            <Calendar type={'SET_STARTDATE'} lang={'en'} />
                        </label>
                        <label>Start time:
                            <Time type={'SET_STARTTIME'} />
                        </label>
                        <label>Return date:
                            <Calendar type={'SET_STOPDATE'} lang={'en'} />
                        </label>
                        <label>Return time:
                            <Time type={'SET_STOPTIME'} />
                        </label>
                        <label className="additional-information">Additional information:
                            <textarea name="additional" placeholder="Additional information" onChange={(e) => formContext.setForm('SET_ADDITIONAL', e.target.value)} defaultValue={formContext.additional}></textarea>
                        </label>
                    </div>
                </form>
                <div className="autorendi-carcard">
                    <AutorendiCarCard />
                    <button onClick={formHundler} className="button">Broneeri</button>
                    {errorMessage && <span className="red bold">{errorMessage}</span>}
                </div>
            </section>
        </MainLayout>
    )



}

