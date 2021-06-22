import { CarSlider } from '../../ui/CarSlider'
import Link from 'next/link'
import { PopupSettings } from './PopupSettings'
import { useState } from 'react'
import styles from '../../../styles/admin.module.sass'
import { PopupDelete } from './PopupDelete'

export const AdminCarCard = ({ car }) => {
    const [settingsOn, setSettingsOn] = useState(false)
    const [deletePopup, setDeletePopup] = useState(false)

    if (settingsOn) {
        document.querySelector('body').classList.add('overflow-hidden')
    } else {
        document.querySelector('body').classList.remove('overflow-hidden')

    }

    function settingsHundler() {
        setSettingsOn(!settingsOn)
    }

    function deleteHundler() {
        setDeletePopup(!deletePopup)
    }

    return (
        <div className={`car__card ${styles["admin-car__card"]}`}>
            {deletePopup && <PopupDelete car={car} close={deleteHundler} />}
            {settingsOn && <PopupSettings typeSubmit="update" car={car} close={settingsHundler} />}
            <CarSlider images={car.Images} />
            <div className="car__card-parameters">
                <div className={styles["admin-settings"]}>
                    <div onClick={settingsHundler} className="icon icon__gear"></div>
                    <div onClick={deleteHundler} className="icon icon__trash"></div>
                </div>
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
                    <Link href={{ pathname: "/autorent", query: { id: car['id'] } }}>
                        <button className="button">Broneeri</button>
                    </Link>
                </ul>
            </div>
        </div>
    )
}


// <div className={`car__card ${styles["admin-car__card"]}`}>
//             {settingsOn && <PopupSettings />}
//             <CarSlider images={car.images} />
//             <div className={styles["admin-settings"]}>
//                 <div onClick={() => settingsHundler()} className="icon icon__gear"></div>
//                 <div className="icon icon__trash"></div>
//             </div>
//             <div className="car__card-parameters">
//                 <ul className="parameters car-parameters">
//                     {carPKeys.map((param, index) => {
//                         return (
//                             <li key={car.carParameters[param]}>
//                                 <span className="parametr-name">{param}</span>
//                                 <span className={`${index == 0 && "red"} bold parametr-value`}>{car.carParameters[param]}</span>
//                             </li>
//                         )
//                     })}
//                 </ul>
//                 <ul className="parameters rent-parameters">
//                     {pricePKeys.map((param, index) => {
//                         return (
//                             <li key={car.priceParameters[param]}>
//                                 <span className="parametr-name">{param}</span>
//                                 <span className={`bold parametr-value`}>{car.priceParameters[param]}</span>
//                             </li>
//                         )
//                     })}

//                     <Link href="/autorent">
//                         <button className="button">Broneeri</button>
//                     </Link>
//                 </ul>
//             </div>
//         </div>