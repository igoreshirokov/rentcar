import { CarSlider } from '../../../ui/CarSlider.js'
import Link from 'next/link'


export const CarCard = ({ car }) => {

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
                        <span className="bold parametr-value">{car['Fuel'] == 'Diesel' ? 'Diesel fuel' : car['Fuel'] == 'Gas' ? 'Gas' : `Petrol (unleaded ${car['Fuel']})`}</span>
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
                        <span className="bold parametr-value">{car['Consumption']} Liters/100 km</span>
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
                    <Link href={{pathname: "/autorent", query: { id: car['id']}}}>
                        <button className="button">Booking</button>
                    </Link>
                </ul>
            </div>
        </div>
    )


    // return (
    //     <div className="car__card">
    //         <CarSlider images={car.images} />
    //         <div className="car__card-parameters">
    //             <ul className="parameters car-parameters">
    //                 {carPKeys.map((param, index) => {
    //                     return (
    //                         <li key={car.carParameters[param]}>
    //                             <span className="parametr-name">{param}</span>
    //                             <span className={`${index == 0 && "red"} bold parametr-value`}>{car.carParameters[param]}</span>
    //                         </li>
    //                     )
    //                 })}
    //             </ul>
    //             <ul className="parameters rent-parameters">
    //                 {pricePKeys.map((param, index) => {
    //                     return (
    //                         <li key={car.priceParameters[param]}>
    //                             <span className="parametr-name">{param}</span>
    //                             <span className={`bold parametr-value`}>{car.priceParameters[param]}</span>
    //                         </li>
    //                     )
    //                 })}

    //                 <Link href="/autorent">
    //                     <button className="button">Broneeri</button>
    //                 </Link>
    //             </ul>
    //         </div>
    //     </div>
    // )
}