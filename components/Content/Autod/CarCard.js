import { CarSlider } from './CarSlider.js'



export const CarCard = ({ car }) => {
    const carPKeys = Object.keys(car.carParameters)
    const pricePKeys = Object.keys(car.priceParameters)

    return (
        <div className="car__card">
            <CarSlider images={car.images} />
            <div className="car__card-parameters">
                <ul className="parameters car-parameters">
                    {carPKeys.map((param, index) => {
                        return (
                            <li key={car.carParameters[param]}>
                                <span className="parametr-name">{param}</span>
                                <span className={`${index == 0 && "red"} bold parametr-value`}>{car.carParameters[param]}</span>
                            </li>
                        )
                    })}
                </ul>
                <ul className="parameters rent-parameters">
                    {pricePKeys.map((param, index) => {
                        return (
                            <li key={car.priceParameters[param]}>
                                <span className="parametr-name">{param}</span>
                                <span className={`bold parametr-value`}>{car.priceParameters[param]}</span>
                            </li>
                        )
                    })}

                    <button className="button">Broneeri</button>
                </ul>
            </div>
        </div>
    )
}