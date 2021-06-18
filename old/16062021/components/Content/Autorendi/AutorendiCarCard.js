import Link from 'next/link'


export const AutorendiCarCard = ({ car }) => {
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
                        <span className="bold parametr-value">{car['Fuel']}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Käigukast</span>
                        <span className="bold parametr-value">{car['Transmission']}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Uste arv</span>
                        <span className="bold parametr-value">{car['Doors']}</span>
                    </li>
                    <li>
                        <span className="parametr-name">Kütusekulu</span>
                        <span className="bold parametr-value">{car['Consumption']} Liitrit/100 km</span>
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


{/*             
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
            </div> */}