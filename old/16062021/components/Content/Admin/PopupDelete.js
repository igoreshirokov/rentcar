import { useRouter } from 'next/router'

export const PopupDelete = ({ car, close }) => {
    const router = useRouter()

    async function deleteCar() {
        const carId = { id: car['id'] }
        const req = await fetch('http://localhost:3000/api/car/delete', {
            method: 'PUT',
            body: JSON.stringify(carId)
        });
        const res = await req.json()
        
        return 'ok'
    }

    function deleteCarHundler() {
        deleteCar()
        .then(res => {
            router.push('/admin')
            return close()
        })
    }

    return (
        <div id="wrapper" onClick={(e) => e.target.id === 'wrapper' && close()} className="popup-wrapper">
            <div className="popup-content">
                <div onClick={close} className="icon icon__close popup-close"></div>
                <div className="popup-content__message-title">
                    Delete
                </div>
                <div className="popup-content__message-message">
                    <p>Delete <span className="red">{car['model']}?</span></p>
                </div>
                <button onClick={deleteCarHundler} className="button">Delete</button>
            </div>
        </div>
    )
}