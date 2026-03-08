import BrazilMap from "../components/BrazilMap";

const Home = () => {
    return (
        <main className="main">
            <div className="container">
                <h2 className="container__title">Selecione um Estado:</h2>
                <BrazilMap />
            </div>
        </main>
    );
};

export default Home;
