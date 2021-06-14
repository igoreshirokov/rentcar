import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AutorendiCarCard } from './AutorendiCarCard'
import { MainLayout } from '../../../Layouts/MainLayout'
import Calendar from '../../../ui/Calendar'
import Time from '../../../ui/Time'
import { PopupBroner } from './PopupBroner'
import { AutoSelect } from './AutoSelect'
import { BASE_URL } from '../../../Constants'
import { FetchLoading } from '../../../ui/FetchLoading'


export default function AutorentPage({ data }) {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: 0,
        surname: '',
        email: '',
        address: '',
        phone: 0,
        zip: '',
        auto: '',
        dateStart: '',
        timeStart: '',
        dateStop: '',
        timeStop: ''
    })
    const [errorMessage, setErrorMessage] = useState(false)
    const [autoSelect, setAutoSelect] = useState(data.car)
    const [popup, setPopup] = useState(false)
    const [fetchLoading, setFetchLoading] = useState(false)
    async function formRequest(data) {
        const request = await fetch(BASE_URL + 'api/broner', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        const response = await request.json()

        return response.status
    }

    function formHundler() {
        if (formData['name'] && formData['phone']) {
            setFetchLoading(true)

            formRequest(formData)
                .then(res => {
                    setTimeout(() => {
                        setFetchLoading(false)
                        setPopup(!popup)
                    }, 2000)
                })
        } else {
            setErrorMessage('Name or Phone is required')
        }

    }

    function closePopup() {
        router.push('/')
    }

    function hundlerChange(e) {
        e.preventDefault()
        setFormData(prevState => {
            let state = prevState
            state[e.target.name] = e.target.value
            return { ...state }
        })

    }


    if (data.status === 200) {
        return (
            <MainLayout title="Autorendi päringu vorm">
                {popup && <PopupBroner close={closePopup} />}
                {fetchLoading && <FetchLoading />}
                <section className="autorendi">
                    <div className="breadcrumbs">
                        <span className="breadcrumb-parent">Главная/</span>
                        <span className="breadcrumb-parent">Автомобили/</span>
                        <span className="breadcrumb-current">Форма запроса</span>

                    </div>
                    <h2><span className="red">Форма</span> запроса автомобиля</h2>
                    <p>Заполните заявку и наш менеджер свяжется с вами в течении <span className="red">30 минут</span></p>
                </section>
                <section className="autorendi-broner">
                    {errorMessage && <span className="red bold">{errorMessage}</span>}
                    <form onChange={hundlerChange} className="form autorendi-form">
                        <div className="form-person">
                            <label>Имя:
                        <input type="text" name="name" placeholder="Alex" required></input>
                            </label>
                            <label>Фамилия:
                        <input type="text" name="surname" placeholder="Petrov"></input>
                            </label>
                            <label>E-mail адрес:
                        <input type="text" name="email" placeholder="petrov@gmail.com"></input>
                            </label>
                            <label>Домашний адрес:
                        <input type="text" name="address" placeholder="Vilnus, Krony 44"></input>
                            </label>
                            <label>Номер телефона:
                        <input type="text" name="phone" placeholder="+ XXX-XX-XXX-XX-XX" required></input>
                            </label>
                            <label>Личный код:
                        <input type="text" name="zip" placeholder="ХХХ"></input>
                            </label>
                        </div>
                        <div className="form-auto">
                            <label>Автомобиль:
                                <AutoSelect />
                            </label>

                        </div>
                        <div className="form-date">
                            <label>Период аренды:</label>
                            <label>Дата начала
                        <Calendar lang={'ru'} />
                            </label>
                            <label>
                        <Time />
                            </label>
                            <label>Дата возврата
                        <Calendar />
                            </label>
                            <label>
                        <Time />
                            </label>
                        </div>
                        <div className="form-comment">
                            <label>Доп. Информация:
                                <textarea name="comment" placeholder="Дополнительная информация"></textarea>
                            </label>
                        </div>
                    </form>
                    <div className="autorendi-carcard">
                        <AutorendiCarCard car={data.car} />
                        {errorMessage && <span className="red bold">{errorMessage}</span>}
                        <button onClick={formHundler} className="button">Broneeri</button>
                    </div>
                </section>
            </MainLayout>
        )
    }


}

