import styles from '../../../styles/admin.module.sass'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'


export const PopupSettings = ({ typeSubmit, close, car }) => {
    const router = useRouter()
    const inputFile = useRef(null)
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
        Images: car['Images'],
    })

    function deleteImage(index) {
        setSettings(prevState => {
            let state = prevState
            let images = JSON.parse(state['Images'])
            images = images.filter((image, i) => i !== index)
            state['Images'] = JSON.stringify(images)
            console.log(settings.Images)
            return { ...state }
        })
    }

    function hundleChange(e) {
        const current = e.target
        setSettings((prevState) => {
            let state = prevState
            if (current.name == 'Images') {

                const files = Array.from(current.files)
                files.forEach((file, index) => {
                    if (!file.type.match('image')) {
                        return
                    }
                    if (index > 4) {
                        return
                    }
                    const reader = new FileReader()

                    reader.onload = (ev) => {
                        setSettings(prevState => {
                            let currentState = prevState
                            let stateImages = JSON.parse(currentState['Images'])
                            if (stateImages.length > 4) {
                                return { ...currentState }
                            }
                            stateImages.push(ev.target.result)
                            currentState['Images'] = JSON.stringify(stateImages)
                            return { ...currentState }
                        })
                    }

                    reader.readAsDataURL(file)

                })

                return { ...state }
            }
            state[current.name] = current.value
            return { ...state }
        })
    }


    function hundleSubmit() {
        fetch(`http://localhost:3000/api/car/${typeSubmit}`, {
            method: 'PUT',
            body: JSON.stringify(settings)
        }).then(res => {
            return res.json()
        }).then(res => {
            router.push('/admin')
            return close()
        })

    }

    function openFileDialog(e) {
        e.preventDefault()
        inputFile.current.click()
    }


    return (
        <div id="wrapper" onClick={(e) => e.target.id === 'wrapper' && close()} className={styles["admin-popup-wrapper"]}>
            <div className={styles["admin-popup-content"]}>
                <h2>{typeSubmit == 'update' ? 'Edit car' : 'Create car'}</h2>
                <div onClick={close} className={`icon icon__close ${styles["admin-popup-close-button"]}`}></div>
                <span className="red">Max 5 photo</span>
                <div className={styles["admin-image-picker"]}>

                    <div className={styles["admin-images-list"]}>
                        {JSON.parse(settings.Images).length > 0 && JSON.parse(settings.Images).map((image, index) => {
                            return (
                                <div className={`${styles['admin-image-item']}`}>
                                    <div onClick={() => deleteImage(index)} className={`icon icon__trash ${styles['admin-image-delete']}`}></div>
                                    <img width={150} height={100} src={image} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={styles["admin-popup__car-settings"]}>
                    <form onChange={hundleChange} className={styles["admin-carsettings-form"]}>
                        <input className={styles['admin-file-input']} ref={inputFile} name="Images" multiple="true" accept=".jpg,.jpeg,.png" type="file" />
                        <button onClick={openFileDialog} className={`button ${styles['admin-input-file-button']}`}>Open file</button>
                        <h4>Sõiduki omadused</h4>
                        <div className={styles["admin-carsettings-form__car-parameters"]}>
                            <label>
                                Auto
                            <input type="text" name="model" value={settings.model} />
                            </label>
                            <label>
                                Aasta
                            <input type="number" name="Year" value={settings.Year} />
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
                            <input type="number" name="Consumption" value={settings.Consumption} />
                            </label>
                        </div>
                        <h4>Hind</h4>
                        <div className={styles["admin-carsettings-form__price-parameters"]}>
                            <label>
                                1 Päev €
                            <input type="number" name="Day" value={settings.Day} />
                            </label>
                            <label>
                                1-6 Päeva €
                            <input type="number" name="Sixday" value={settings.Sixday} />
                            </label>
                            <label>
                                1 Nädal €
                            <input type="number" name="Week" value={settings.Week} />
                            </label>
                            <label>
                                1 Kuu ({(settings['Month'] / 30).toFixed(2)} € /päev)
                            <input type="number" name="Month" value={settings.Month} />
                            </label>

                        </div>
                    </form>
                    <button onClick={() => hundleSubmit()} className={`button ${styles['save-change-button']}`}>Salvesta</button>
                </div>
            </div>
        </div>
    )
}