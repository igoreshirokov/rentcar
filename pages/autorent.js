import { AutorendiCarCard } from '../components/Content/Autorendi/AutorendiCarCard'
import { MainLayout } from '../components/Layouts/MainLayout'
import Calendar from '../components/ui/Calendar'
import Time from '../components/ui/Time'
import { useState } from 'react'
import { Popup } from '../components/Content/Popup'
export default function Autorent() {
    const [popup, setPopup] = useState(false)
    function formHundler () {
        setPopup(!popup)
        setTimeout(() => {
            console.log(popup)
        }, 3000);
    }

    const car = {
        id: 1,
        carParameters: {
            "Auto": "Dacia Logan Sedan",
            "Aasta": "2006a.",
            "Mootor": "1.4 54 kW",
            "Kütus": "Bensiin 95",
            "Käigukast": "Manuaal",
            "Uste arv": "5",
            "Kütusekulu": "6 Liitrit/100 km"
        },
        priceParameters: {
            "1 Päev": "25 €",
            "1-6 Päeva": "15 € /päev",
            "1 Nädal": "75 €",
            "1 Kuu": "200 € (6.66 € /päev)",
        },
        images: [
            "/images/content/autod/dacia_logan/dacia_logan_1.png",
            "/images/content/autod/dacia_logan/dacia_logan_2.png",
            "/images/content/autod/dacia_logan/dacia_logan_3.png",
            "/images/content/autod/dacia_logan/dacia_logan_4.png",
            "/images/content/autod/dacia_logan/dacia_logan_5.png",
        ]
    }

    return (
        <MainLayout title="Autorendi päringu vorm">
            {popup && <Popup />}
            <section className="autorendi">
                <div className="breadcrumbs">
                    
                        <span className="breadcrumb-parent">Peamine/</span>
                        <span className="breadcrumb-parent">Autod/</span>
                        <span className="breadcrumb-current">Autorendi päringu vorm</span>
                    
                </div>
                <h2><span className="red">Autorendi</span> päringu vorm</h2>
                <p>Täitke taotlus ja meie juht võtab teiega ühendust <span className="red">30 minuti</span> jooksul</p>
            </section>
            <section className="autorendi-broner">
                <form className="form autorendi-form">
                    <div className="form-person">
                        <label>Nimi
                    <input type="text" name="name" placeholder="Alex"></input>
                        </label>
                        <label>Perekonnanimi
                    <input type="text" name="surname" placeholder="Petrov"></input>
                        </label>
                        <label>E-mail
                    <input type="text" name="email" placeholder="petrov@gmail.com"></input>
                        </label>
                        <label>Koduaadress
                    <input type="text" name="address" placeholder="Vilnus, Krony 44"></input>
                        </label>
                        <label>Tel. number
                    <input type="text" name="phone" placeholder="+ XXX-XX-XXX-XX-XX"></input>
                        </label>
                        <label>Isikukood
                    <input type="text" name="zip" placeholder="ХХХ"></input>
                        </label>
                    </div>
                    <div className="form-auto">
                        <label>Auto
                    <select>
                                <option>Dacia Logan Sedan</option>
                                <option>Dacia Logan Sedan</option>
                            </select>
                        </label>

                    </div>
                    <div className="form-date">
                        <label>Rendikuupäev
                    <Calendar />
                        </label>
                        <label>Väljastuse aeg
                    <Time />
                        </label>
                        <label>Tagastamise kuupäev
                    <Calendar />
                        </label>
                        <label>Tagastuse aeg
                    <Time />
                        </label>
                    </div>
                    <div className="form-comment">
                        <label>Comment
                            <textarea name="comment" placeholder="comment"></textarea>
                        </label>
                    </div>
                </form>
                <div className="autorendi-carcard">
                    <AutorendiCarCard car={car} />
                    <button onClick={formHundler} className="button">Broneeri</button>
                </div>
            </section>
        </MainLayout>
    )
}