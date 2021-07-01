import { MainLayout } from '../../../Layouts/MainLayout'

export default function RenditingimusedPage() {
    return (
        <MainLayout title={'Rental conditions'}>
            <section className="renditingimused-head">
                <h2>Rental conditions</h2>
                <p>Please read the rental conditions carefully before booking the car.</p>
            </section>
            <section className="renditingimused-main">
                <ul className="renditingimused-list">
                    <li>
                        Drivers are required to be at least <span className="red bold">21 years old</span>. Driver must provide a valid driver’s license (or an International Driving Permit) held for at least 2 years. An additional fee may apply to drivers under the age of 23. The driver’s license must be printed in the Latin Alphabet.
                    </li>
                    <li>
                        We require a security deposit of <span className="red bold">€200</span> that will be refunded in full once the vehicle is returned.
                    </li>
                    <li>
                        All vehicles are provided with a full tank of fuel and must be returned with a full tank as well. Vehicles returned short of a full tank will be charged at <span className="red bold">a rate of €1.50 per liter.</span>
                    </li>
                    <li>
                        We provide vehicles that are clean, both inside and out and we require that our car renters wash their rental vehicles and clean the interior prior to returning them. A <span className="red bold">€25</span> fee is deducted from the security deposit if the vehicle is returned dirty, either inside or out (€50 if both the interior and the exterior need cleaning).
                    </li>
                    <li>
                    <span className="red bold">RED</span> <span className="bold">Autorent</span> <span className="red bold">DO NOT allow smoking</span> in our vehicles. If a vehicle is returned with evidence of smoking, a €150 detailing fee is deducted from the security deposit.
                    </li>
                    <li>
                        Car renters are responsible for all tickets incurred, such as speeding and parking tickets.
                    </li>
                    <li>
                        Car renters are required to notify <span className="red bold">RED</span> <span className="bold">Autorent</span> before driving to another country. Otherwise, the car renter will lose the security deposit.
                    </li>
                    <li>
                        Car renters must notify <span className="red bold">RED</span> <span className="bold">Autorent</span> of any accidents involving the rental vehicle.
                    </li>
                    <li>
                    <span className="red bold">RED</span> <span className="bold">Autorent</span> will provide a replacement vehicle if your rental vehicle breaks down due to a mechanical failure and is not drivable.
                    </li>

                </ul>
            </section>
        </MainLayout>
    )
}