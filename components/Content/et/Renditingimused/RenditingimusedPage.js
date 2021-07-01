import { MainLayout } from '../../../Layouts/MainLayout'

export default function RenditingimusedPage () {
    return (
        <MainLayout title={'Renditingimused'}>
            <section className="renditingimused-head">
                <h2>Renditingimused</h2>
                <p>Enne auto broneerimist lugege hoolikalt renditingimused.</p>
            </section>
            <section className="renditingimused-main">
                <ul className="renditingimused-list">

                    <li>
                        Juhi miinimumvanus peab olema <span className="red bold">21 aastat</span> ja juhtimiskogemus vähemalt 2 aastat. Alla 23-aastastele juhtidele võidakse kohaldada lisatasu. Juhiloal peab teave olema ladina tähtedega või kliendil peab olema rahvusvaheline juhiluba.
                    </li>

                    <li>
                        Auto rentimisel võetakse tagatisraha <span className="red bold">200 eurot</span>, mis tagastatakse kliendile auto tagastamisel.
                    </li>

                    <li>
                        Autod antakse rendile täis kütusepaagiga ja need tuleb tagastada samuti täis paagiga. Puuduoleva kütuse eest on klient kohustatud tasuma vastavalt <span className="red bold">RED</span> <span className="bold">Autorenti</span> kütusetariifile, <span className="red bold">mis on 1.50 eurot liiter.</span>
                    </li>

                    <li>
                        Auto antakse kliendile üle nii seest kui ka väljast puhtana ning klient kohustub auto samas seisukorras tagastama. Kui auto tagastatakse määrdunult, peetakse salongi määrdumise korral tagatisrahast kinni <span className="red bold">25 eurot</span> ja välise määrdumise korral <span className="red bold">25 eurot.</span>
                    </li>

                    <li>
                        <span className="red bold">RED</span> <span className="bold">Autorenti</span> rendiautodes on suitsetamine <span className="red bold">KEELATUD!</span> Kui auto tagastatakse suitsulõhnalise salongiga, peetakse tagatisrahast kinni <span className="red bold">150 eurot</span> salongi keemiliseks puhastuseks.
                    </li>

                    <li>
                        Vastutust trahvide eest (kiiruse ületamine, parkimine) kannab rentnik.
                    </li>

                    <li>
                        Kui soovite rendiautoga sõita väljapoole Eestit, peate sellest kindlasti teavitama <span className="red bold">RED</span> <span className="bold">Autorenti</span> esindajat, vastasel juhul minetate tagatisraha.
                    </li>

                    <li>
                        Avarii korral peate vahejuhtumist <span className="red bold">RED</span> <span className="bold">Autorenti</span> teavitama.
                    </li>

                    <li>
                        Kui autol tekkis rike mitte juhi süül ja autot ei saa enam kasutada, annab <span className="red bold">RED</span> <span className="bold">Autorent</span> teile teise auto.
                    </li>

                </ul>
            </section>
        </MainLayout>
    )
}