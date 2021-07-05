import { useRouter } from 'next/router'
import { BASE_URL } from '../../Constants'
import { useEffect, useState } from "react"
import { ComponentLoading } from '../../ui/FetchLoading'

export const PopupDelete = ({ car, close }) => {
    const router = useRouter()
    const [deleteButtonIsActive, setDeleteButtonIsActive] = useState(true)

    async function deleteCar() {
        const carId = { id: car['id'] }
        const req = await fetch(`${BASE_URL}api/car/delete`, {
            method: 'DELETE',
            body: JSON.stringify(carId)
        });
        const res = await req.json()
        console.log(res)
        return 'ok'
    }

    useEffect(() => {
        const body = document.querySelector('body')
        body.classList.add('overflow-hidden')

        return () => body.classList.remove('overflow-hidden')
    }, [])

    function deleteCarHundler() {
        setDeleteButtonIsActive(false)
        deleteCar()
            .then(res => {
                router.reload()
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
                    {deleteButtonIsActive ? (<div className="popup-content__message-message"><p>Delete <span className="red">{car['model']}?</span></p><button onClick={deleteCarHundler} className="button">Delete</button></div>) : <ComponentLoading />}
            </div>
        </div>
    )
}