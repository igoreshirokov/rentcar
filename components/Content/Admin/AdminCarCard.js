import { CarSlider } from '../Autod/CarSlider.js'
import Link from 'next/link'
import { PopupSettings } from './PopupSettings'
import { useState } from 'react'
import styles from '../../../styles/admin.module.sass'



export const AdminCarCard = ({ car }) => {
    const carPKeys = Object.keys(car.carParameters)
    const pricePKeys = Object.keys(car.priceParameters)
    const [settingsOn, setSettingsOn] = useState(false)
    function settingsHundler () {
        setSettingsOn(!settingsOn)
    }

    return (
        <div className={`car__card ${styles["admin-car__card"]}`}>
            {settingsOn && <PopupSettings />}
            <CarSlider images={car.images} />
            <div className={styles["admin-settings"]}>
                <div onClick={() => settingsHundler()} className="icon icon__gear"></div>
                <div className="icon icon__trash"></div>
            </div>
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

                    <Link href="/autorent">
                        <button className="button">Broneeri</button>
                    </Link>
                </ul>
            </div>
        </div>
    )
}