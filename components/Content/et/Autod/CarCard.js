import { CarSlider } from '../../../ui/CarSlider.js'
import { useRouter } from 'next/router'
import { FormContext } from '../../../../store/formContext'
import { useContext } from 'react'

export const CarCard = ({ car }) => {
    const formContext = useContext(FormContext)
    const router = useRouter()
    function hundlerBroner () {
        formContext.setForm('SET_AUTO', car['model'])
        router.push('/autorent')
    }
    return (
        <div className="car__card">
            <CarSlider images={car.Images} />
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
                        <span className="bold parametr-value">{car['Fuel'] == 'Diesel' ? 'Diisel' : car['Fuel'] == 'Gas' ? 'LPG (Gaas) + Bensiin' : `Bensiin ${car['Fuel']}`}</span>
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
                
                        <button onClick={hundlerBroner} className="button">Broneeri</button>
                    
                </ul>
            </div>
        </div>
    )


}