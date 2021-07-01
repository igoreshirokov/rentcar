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
                We have received your booking request
                </div>
                <div className="popup-content__message-message">
                    <p>Our customer service will contact you within <span className = "red"> 30 minutes </span> to confirm your reservation.</p>
                    <p>If you have any questions, please call <span className = "red"> <a className="red" href="tel:+3725535603">+3725535603</a> </span></p>
                </div>
                <button onClick={close} className="button">Got it, I'll wait</button>
            </div>
        </div>
    )
}