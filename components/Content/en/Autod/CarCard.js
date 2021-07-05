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
                        <span className="parametr-name">Vehicle</span>
                        <span className="red bold parametr-value">{car['model']}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Year</span>
                        <span className="bold parametr-value">{car['Year']}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Engine</span>
                        <span className="bold parametr-value">{car['Engine']}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Fuel type</span>
                        <span className="bold parametr-value">{car['Fuel'] == 'Diesel' ? 'Diesel fuel' : car['Fuel'] == 'Gas' ? 'LPG (Gas) + Petrol' : `Petrol (unleaded ${car['Fuel']})`}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Gearbox</span>
                        <span className="bold parametr-value">{car['Transmission']}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Doors</span>
                        <span className="bold parametr-value">{car['Doors']}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Fuel consumption</span>
                        <span className="bold parametr-value">{car['Consumption']}{car['Fuel'] !== 'Gas' ? ' l' : ' €'}/100 km</span>
                    </li>
                </ul>
                <ul className="parameters rent-parameters">
                    <li>
                        <span className="parametr-name">1 Day</span>
                        <span className={`bold parametr-value`}>{car['Day']} €</span>
                    </li>
                    <li>
                        <span className="parametr-name">1-6 Days</span>
                        <span className={`bold parametr-value`}>{car['Sixday']} € /day</span>
                    </li>
                    <li>
                        <span className="parametr-name">1 Week</span>
                        <span className={`bold parametr-value`}>{car['Week']} €</span>
                    </li>
                    <li>
                        <span className="parametr-name">1 Month</span>
                        <span className={`bold parametr-value`}>{car['Month']} € ({(car['Month'] / 30).toFixed(2)} € /day)</span>
                    </li>
                
                        <button onClick={hundlerBroner} className="button">Booking</button>
                    
                </ul>
            </div>
        </div>
    )


}