import Header from '../components/Header.js'

export default function Home() {
    return (
        <>
            <Header />
            <section className="home-main">
                <h1>Säästu <span className="red">Autorent</span> Tallinnas</h1>
                <p className="subtitle"><span className="uppercase red">RED</span> Autorent on soodsate hindadega ökonoomsete autode rent Tallinnas alates <span className="red bold">6.66 eurot/ööpäev</span></p>
                <div className="advantages">
                    <div className="advantage">
                        <img src="/images/content/home/icons/p1b1i1.svg" />
                        <span>Suurepärases tehnilises korras autod</span>
                    </div>
                    <div className="advantage">
                        <img src="/images/content/home/icons/p1b1i2.svg" />
                        <span>Bensiini-, diisel- ja gaasimootoritega autod</span>
                    </div>
                    <div className="advantage">
                        <img src="/images/content/home/icons/p1b1i3.svg" />
                        <span>Üle 3-kuulise rendiperioodi puhul teeme allahindlust</span>
                    </div>
                </div>
                <button className="button">Broneeri</button>
            </section>
        </>
    )
}