import { useEffect } from "react"

export const PopupBroner = ({ close }) => {
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
                    Мы получили ваш запрос на бронирование
            </div>
                <div className="popup-content__message-message">
                    <p>Наша служба поддержки свяжется с вами в течение <span className="red"> 30 минут </span>, чтобы подтвердить ваше бронирование.</p>
                    <p>Если у вас есть вопросы, звоните по телефону <span className="red"> <a className="red" href="tel:+3725535603">+3725535603</a></span></p>
                </div>
                <button onClick={close} className="button">Понял, я подожду</button>
            </div>
        </div>
    )
}