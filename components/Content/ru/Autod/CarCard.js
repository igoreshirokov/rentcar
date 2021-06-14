import { CarSlider } from '../../../ui/CarSlider.js'
import Link from 'next/link'


export const CarCard = ({ car }) => {

    return (
        <div className="car__card">
            <CarSlider images={car.Images} />
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
                        <span className="bold parametr-value">{car['Fuel'] == 'Diesel' ? 'Дизель' : car['Fuel'] == 'Gaz' ? 'Газ' : `Бензин ${car['Fuel']}`}</span>
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
                        <span className="bold parametr-value">{car['Consumption']} Литров/100 км</span>
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
                    <Link href={{pathname: "/autorent", query: { id: car['id']}}}>
                        <button className="button">Бронировать</button>
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