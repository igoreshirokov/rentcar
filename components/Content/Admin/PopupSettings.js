import styles from '../../../styles/admin.module.sass'

export const PopupSettings = () => {
    return (
        <div className={styles["admin-popup-wrapper"]}>
            <div className={styles["admin-popup-content"]}>
                <div className={`icon icon__close ${styles["admin-popup-close-button"]}`}></div>
                <div className={styles["admin-image-picker"]}>
                    <div className={styles["admin-file-form"]}>
                        Lae pilt üles
                    </div>
                    <div className={styles["admin-images-list"]}></div>
                </div>
                <div className={styles["admin-popup__car-settings"]}>
                    <form className={styles["admin-carsettings-form"]}>
                        <h4>Sõiduki omadused</h4>
                        <div className={styles["admin-carsettings-form__car-parameters"]}>
                            <label>
                                Auto
                            <input type="text" />
                            </label>
                            <label>
                                Aasta
                            <select>
                                    <option>2006a.</option>
                                    <option>2007a</option>
                                </select>
                            </label>
                            <label>
                                Mootor
                            <input type="text" />
                            </label>
                            <label>
                                Kütus
                            <select>
                                    <option>Bensiin 95</option>
                                    <option>Bensiin 92</option>
                                </select>
                            </label>
                            <label>
                                Käigukast
                            <select>
                                    <option>Manuaal</option>
                                    <option>Auto</option>
                                </select>
                            </label>
                            <label>
                                Uste arv
                            <select>
                                    <option>5</option>
                                    <option>3</option>
                                </select>
                            </label>
                            <label>
                                Kütusekulu
                            <input type="text" />
                            </label>
                        </div>
                        <h4>Hind</h4>
                        <div className={styles["admin-carsettings-form__price-parameters"]}>
                            <label>
                                1 Päev
                            <input type="text" />
                            </label>
                            <label>
                                1-6 Päeva
                            <input type="text" />
                            </label>
                            <label>
                                1 Nädal
                            <input type="text" />
                            </label>
                            <label>
                                1 Kuu
                            <input type="text" />
                            </label>

                        </div>
                        <button className={`button ${styles['save-change-button']}`}>Salvesta</button>
                    </form>
                </div>
            </div>
        </div>
    )
}