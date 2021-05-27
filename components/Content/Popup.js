export const Popup = ({ message }) => {
    return (
        <div className="popup-wrapper">
            <div className="popup-content">
                <div className="icon icon__close popup-close"></div>
                <div className="popup-content__message-title">
                    Oleme Teie broneerimise päringu kätte saanud
                </div>
                <div className="popup-content__message-message">
                    <p>Meie klienditeenindaja võtab teiega broneeringu kinnitamiseks <span className="red">30 minuti</span> jooksul ühendust.</p>
                    <p>Kui Teil on tekkinud küsimusi siis palun helistage numbril <span className="red">+372 5535603</span></p>
                </div>
                <button className="button">Sain aru, jään ootama</button>
            </div>
        </div>
    )
}