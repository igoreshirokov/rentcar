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
                        <span className="parametr-name">Auto</span>
                        <span className="red bold parametr-value">{car['model']}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Aasta</span>
                        <span className="bold parametr-value">{car['Year']}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Mootor</span>
                        <span className="bold parametr-value">{car['Engine']}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Kütus</span>
                        <span className="bold parametr-value">{car['Fuel'] == 'Diesel' ? 'Diisel' : `Bensiin ${car['Fuel']}`}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Käigukast</span>
                        <span className="bold parametr-value">{car['Transmission'] == 'Manual' ? 'Manuaal' : 'Auto'}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Uste arv</span>
                        <span className="bold parametr-value">{car['Doors']}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Kütusekulu</span>
                        <span className="bold parametr-value">{car['Consumption']}{car['Fuel'] !== 'Gas' ? ' l' : ' €'}/100 km</span>
                    </li>
                </ul>
                <ul className="parameters rent-parameters">
                    <li>
                        <span className="parametr-name">1 Päev</span>
                        <span className={`bold parametr-value`}>{car['Day']} €</span>
                    </li>
                    <li>
                        <span className="parametr-name">1-6 Päeva</span>
                        <span className={`bold parametr-value`}>{car['Sixday']} € /päev</span>
                    </li>
                    <li>
                        <span className="parametr-name">1 Nädal</span>
                        <span className={`bold parametr-value`}>{car['Week']} €</span>
                    </li>
                    <li>
                        <span className="parametr-name">1 Kuu</span>
                        <span className={`bold parametr-value`}>{car['Month']} € ({(car['Month'] / 30).toFixed(2)} € /päev)</span>
                    </li>
                </ul>
            </div>

        </div>
    )
}

