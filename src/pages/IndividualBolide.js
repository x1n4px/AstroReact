import { useParams } from "react-router-dom";
import MapChart from "../components/chart/MapChart";

const IndividualBolide = () => {
    const { id } = useParams();
    console.log(id)
    const data = [
        { id: 1, lat: 36.7213, lon: -4.4216, title: 'Punto 1 (Málaga)' },
        { id: 2, lat: 36.7741, lon: -4.4280, title: 'Punto 2 (Málaga)' },
        { id: 3, lat: 36.7185, lon: -4.4204, title: 'Punto 3 (Málaga)' },
        { id: 4, lat: 36.4479, lon: -4.9282, title: 'Punto 4 (Rincón de la Victoria)' },
        { id: 5, lat: 36.6950, lon: -4.4782, title: 'Punto 5 (Teatinos)' },
        { id: 6, lat: 36.7272, lon: -4.4240, title: 'Punto 6 (Málaga)' },
        { id: 7, lat: 36.8996, lon: -4.4946, title: 'Punto 7 (Antequera)' },
        { id: 8, lat: 36.9882, lon: -4.5313, title: 'Punto 8 (Archidona)' },
        { id: 9, lat: 36.6724, lon: -4.5232, title: 'Punto 9 (Cártama)' },
        { id: 10, lat: 36.8974, lon: -4.7312, title: 'Punto 10 (Villanueva de la Concepción)' },
        { id: 11, lat: 36.5910, lon: -4.4604, title: 'Punto 11 (Alhaurín el Grande)' },
        { id: 12, lat: 36.5275, lon: -4.6547, title: 'Punto 12 (Alhaurín de la Torre)' },
        { id: 13, lat: 36.5333, lon: -4.7600, title: 'Punto 13 (Coín)' },
        { id: 14, lat: 36.5892, lon: -4.7572, title: 'Punto 14 (Mijas)' },
        { id: 15, lat: 36.8085, lon: -4.7047, title: 'Punto 15 (Benalmádena)' },
        { id: 16, lat: 36.6672, lon: -4.7701, title: 'Punto 16 (Torrox)' },
        { id: 17, lat: 36.6039, lon: -4.7479, title: 'Punto 17 (Fuengirola)' },
        { id: 18, lat: 36.5223, lon: -4.9410, title: 'Punto 18 (Ronda)' },
        { id: 19, lat: 36.7319, lon: -4.5247, title: 'Punto 19 (La Cala del Moral)' },
        { id: 20, lat: 36.7509, lon: -4.4287, title: 'Punto 20 (Málaga)' },
        { id: 21, lat: 36.7945, lon: -4.4313, title: 'Punto 21 (Málaga)' },
        { id: 22, lat: 36.5642, lon: -4.5912, title: 'Punto 22 (Cártama)' },
        { id: 23, lat: 36.8247, lon: -4.5299, title: 'Punto 23 (Alhaurín de la Torre)' },
        { id: 24, lat: 36.6025, lon: -4.5502, title: 'Punto 24 (Mijas Pueblo)' },
        { id: 25, lat: 36.5615, lon: -4.5106, title: 'Punto 25 (Alhaurín el Grande)' },
        { id: 26, lat: 36.6972, lon: -4.4084, title: 'Punto 26 (Málaga)' },
        { id: 27, lat: 36.6575, lon: -4.4929, title: 'Punto 27 (Alora)' },
        { id: 28, lat: 36.6351, lon: -4.7085, title: 'Punto 28 (Fuengirola)' },
        { id: 29, lat: 36.8569, lon: -4.3878, title: 'Punto 29 (Antequera)' },
        { id: 30, lat: 36.7318, lon: -4.6864, title: 'Punto 30 (Benalmádena)' },
        { id: 31, lat: 36.8833, lon: -4.7880, title: 'Punto 31 (Archidona)' },
        { id: 32, lat: 36.7021, lon: -4.5632, title: 'Punto 32 (Cártama)' },
        { id: 33, lat: 36.7424, lon: -4.6973, title: 'Punto 33 (Marbella)' },
        { id: 34, lat: 36.6162, lon: -4.6075, title: 'Punto 34 (Málaga)' },
        { id: 35, lat: 36.5462, lon: -4.6976, title: 'Punto 35 (Vélez-Málaga)' },
        { id: 36, lat: 36.6948, lon: -4.5222, title: 'Punto 36 (Málaga)' },
        { id: 37, lat: 36.7619, lon: -4.4354, title: 'Punto 37 (Málaga)' },
        { id: 38, lat: 36.5535, lon: -4.7305, title: 'Punto 38 (Alhaurín de la Torre)' },
        { id: 39, lat: 36.7909, lon: -4.5599, title: 'Punto 39 (Cártama)' },
        { id: 40, lat: 36.6257, lon: -4.4452, title: 'Punto 40 (Málaga)' },
        { id: 41, lat: 36.7324, lon: -4.7205, title: 'Punto 41 (Mijas)' },
        { id: 42, lat: 36.7932, lon: -4.6821, title: 'Punto 42 (Benalmádena)' },
        { id: 43, lat: 36.5533, lon: -4.5759, title: 'Punto 43 (Coín)' },
        { id: 44, lat: 36.6294, lon: -4.6482, title: 'Punto 44 (Marbella)' },
        { id: 45, lat: 36.6679, lon: -4.7072, title: 'Punto 45 (Torremolinos)' },
        { id: 46, lat: 36.6499, lon: -4.5063, title: 'Punto 46 (Ronda)' },
        { id: 47, lat: 36.7736, lon: -4.4365, title: 'Punto 47 (Málaga)' },
        { id: 48, lat: 36.7484, lon: -4.4832, title: 'Punto 48 (Málaga)' },
        { id: 49, lat: 36.7632, lon: -4.5679, title: 'Punto 49 (Fuengirola)' },
        { id: 50, lat: 36.6973, lon: -4.7048, title: 'Punto 50 (Marbella)' },
    ];

    const bolide = data.filter(item => item.id.toString() === id);

    return (
        <div>
            <h1>Detalles del Punto {bolide[0].id} con coordendas: {bolide[0].lat}, {bolide[0].lon}</h1>
            <MapChart data={bolide} activePopUp={false} lat={bolide[0].lat} lon={bolide[0].lon} />
        </div>
    );
};

export default IndividualBolide;
