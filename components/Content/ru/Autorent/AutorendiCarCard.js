import { FormContext } from '../../../../store/formContext'
import { StoreContext } from '../../../../store/store'
import { useContext, useState, useEffect } from 'react'
import { BASE_URL } from '../../../Constants'

export const AutorendiCarCard = () => {
    const ctx = useContext(StoreContext)
    const { catalog } = ctx.state
    const formContext = useContext(FormContext)
    const { auto } = formContext.state
    const [car, setCar] = useState(false)
    useEffect(() => {
        catalog && catalog.forEach(el => {
            if (el.model == auto) {
                setCar(el)
            }
        })
    }, [auto])
    if (!car) {
        return <div className="car__card">Loading...</div>
    }
    const image = JSON.parse(car.Images)[0]

    return (
        <div className="car__card">
            <img src={image} />
            <div className="car__card-parameters">
                <ul className="parameters car-parameters">
                <li>
                        <span className="parametr-name">Автомобиль</span>
                        <span className="red bold parametr-value">{car['model']}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Год выпуска</span>
                        <span className="bold parametr-value">{car['Year']}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Двигатель</span>
                        <span className="bold parametr-value">{car['Engine']}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Топливо</span>
                        <span className="bold parametr-value">{car['Fuel'] == 'Diesel' ? 'Дизель' : `Бензин ${car['Fuel']}`}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Коробка передач</span>
                        <span className="bold parametr-value">{car['Transmission'] == 'Manual' ? 'Механика' : 'Автомат'}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Кол-во дверей</span>
                        <span className="bold parametr-value">{car['Doors']}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Расход топлива</span>
                        <span className="bold parametr-value">{car['Consumption']}{car['Fuel'] !== 'Gas' ? ' л' : ' €'}/100 км</span>
                    </li>
                </ul>
                <ul className="parameters rent-parameters">
                    <li>
                        <span className="parametr-name">1 день</span>
                        <span className={`bold parametr-value`}>{car['Day']} €</span>
                    </li>
                    <li>
                        <span className="parametr-name">1-6 дней</span>
                        <span className={`bold parametr-value`}>{car['Sixday']} € /сутки</span>
                    </li>
                    <li>
                        <span className="parametr-name">1 неделя</span>
                        <span className={`bold parametr-value`}>{car['Week']} €</span>
                    </li>
                    <li>
                        <span className="parametr-name">1 месяц</span>
                        <span className={`bold parametr-value`}>{car['Month']} € ({(car['Month'] / 30).toFixed(2)} € /сутки)</span>
                    </li>
                </ul>
            </div>

        </div>
    )
}

