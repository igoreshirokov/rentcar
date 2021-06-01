export const PopupDelete = ({ close }) => {
    return (
        <div id="wrapper" onClick={(e) => e.target.id === 'wrapper' && close()} className="popup-wrapper">
            <div className="popup-content">
                <div onClick={close} className="icon icon__close popup-close"></div>
                <div className="popup-content__message-title">
                    Oleme Teie broneerimise päringu kätte saanud
                </div>
                <div className="popup-content__message-message">
                    <p>Meie klienditeenindaja võtab teiega broneeringu kinnitamiseks <span className="red">30 minuti</span> jooksul ühendust.</p>
                    <p>Kui Teil on tekkinud küsimusi siis palun helistage numbril <span className="red">+372 5535603</span></p>
                </div>
                <button onClick={close} className="button">Sain aru, jään ootama</button>
            </div>
        </div>
    )
}