import BrazilMap from "../components/BrazilMap";

const Home = () => {
    return (
        <main className="home-layout">
            <section className="map-container">
                <header className="map-container__header">
                    <h2 className="map-container__title">Selecione um Estado</h2>
                </header>
                <div className="map-container__content">
                    <BrazilMap className="map__container" />
                </div>
            </section>
        </main>
    );
};

export default Home;
