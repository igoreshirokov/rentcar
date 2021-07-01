import { useEffect } from "react"

export const PopupBroner = ({close}) => {
    useEffect(() => {
        const body = document.querySelector('body')
        body.classList.add('overflow-hidden')

        return () => body.classList.remove('overflow-hidden')
    })
    return (
        <div id="wrapper" onClick={(e) => e.target.id === 'wrapper' && close()} className="popup-wrapper">
            <div className="popup-content">
                <div onClick={close} className="icon icon__close popup-close"></div>
                <div className="popup-content__message-title">
                    Oleme Teie broneerimise päringu kätte saanud
                </div>
                <div className="popup-content__message-message">
                    <p>Meie klienditeenindaja võtab teiega broneeringu kinnitamiseks <span className="red">30 minuti</span> jooksul ühendust.</p>
                    <p>Kui Teil on tekkinud küsimusi siis palun helistage numbril <span className="red"><a className="red" href="tel:+3725535603">+3725535603</a></span></p>
                </div>
                <button onClick={close} className="button">Sain aru, jään ootama</button>
            </div>
        </div>
    )
}