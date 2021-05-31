import styles from '../../../styles/admin.module.sass'
import { useState } from 'react'


export const PopupSettings = ({ close, car }) => {
    const [settings, setSettings] = useState({
        id: car['id'],
        model: car['model'],
        Year: car['Year'],
        Engine: car['Engine'],
        Fuel: car['Fuel'],
        Transmission: car['Transmission'],
        Doors: car['Doors'],
        Consumption: car['Consumption'],
        Day: car['Day'],
        Sixday: car['Sixday'],
        Week: car['Week'],
        Month: car['Month'],
        Images: JSON.parse(car['Images']),
    })

    function hundleChange(e) {
        const current = e.target
        setSettings((prevState) => {
            let state = prevState
            state[current.name] = current.value
            return { ...state }
        })
    }

    function hundleSubmit() {
        console.log(settings)
    }

    return (
        <div className={styles["admin-popup-wrapper"]}>
            <div className={styles["admin-popup-content"]}>
                <div onClick={close} className={`icon icon__close ${styles["admin-popup-close-button"]}`}></div>
                <span className="red">Max 5 photo</span>
                <div className={styles["admin-image-picker"]}>
                    <form className={styles["admin-file-form"]} >
                        <input multiple type="file" />
                            {/* Lae pilt üles */}
                    </form>
                    <div className={styles["admin-images-list"]}>
                        {settings.Images && settings.Images.map(image => {
                            return (
                                <div className={`${styles['admin-image-item']}`}>
                                    <div className={`icon icon__trash ${styles['admin-image-delete']}`}></div>
                                    <img width={150} height={100} src={settings.Images[0]} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={styles["admin-popup__car-settings"]}>
                    <form onChange={hundleChange} className={styles["admin-carsettings-form"]}>
                        <h4>Sõiduki omadused</h4>
                        <div className={styles["admin-carsettings-form__car-parameters"]}>
                            <label>
                                Auto
                            <input type="text" name="model" value={settings.model} />
                            </label>
                            <label>
                                Aasta
                            <input type="text" name="Year" value={settings.Year} />
                            </label>
                            <label>
                                Mootor
                            <input type="text" name="Engine" value={settings.Engine} />
                            </label>
                            <label>
                                Kütus
                            <select name="Fuel" value={settings.Fuel}>
                                    <option>Bensiin 100</option>
                                    <option>Bensiin 98</option>
                                    <option>Bensiin 95</option>
                                    <option>Bensiin 92</option>
                                    <option>Diesel</option>
                                </select>
                            </label>
                            <label>
                                Käigukast
                            <select name="Transmission" value={settings.Transmission}>
                                    <option>Manuaal</option>
                                    <option>Auto</option>
                                </select>
                            </label>
                            <label>
                                Uste arv
                            <select name="Doors" value={settings.Doors}>
                                    <option>5</option>
                                    <option>3</option>
                                </select>
                            </label>
                            <label>
                                Kütusekulu
                            <input type="text" name="Consumption" value={settings.Consumption} />
                            </label>
                        </div>
                        <h4>Hind</h4>
                        <div className={styles["admin-carsettings-form__price-parameters"]}>
                            <label>
                                1 Päev €
                            <input type="text" name="Day" value={settings.Day} />
                            </label>
                            <label>
                                1-6 Päeva €
                            <input type="text" name="Sixday" value={settings.Sixday} />
                            </label>
                            <label>
                                1 Nädal €
                            <input type="text" name="Week" value={settings.Week} />
                            </label>
                            <label>
                                1 Kuu ({(settings['Month'] / 30).toFixed(2)} € /päev)
                            <input type="text" name="Month" value={settings.Month} />
                            </label>

                        </div>
                    </form>
                    <button onClick={() => hundleSubmit()} className={`button ${styles['save-change-button']}`}>Salvesta</button>
                </div>
            </div>
        </div>
    )
}