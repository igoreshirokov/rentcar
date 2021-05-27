import Link from 'next/link'


export const AutorendiCarCard = ({ car }) => {
    const carPKeys = Object.keys(car.carParameters)
    const pricePKeys = Object.keys(car.priceParameters)

    return (
        <div className="car__card">
            <img src={car.images[0]} />
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


                    

                </ul>
            </div>
        </div>
    )
}