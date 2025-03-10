import { Link } from "react-router-dom";
import '../index.css';

// Componentes
import MapaMalaga from '../components/MapaMalaga';
import BarChart from '../components/BarChart';
import RadarChart from '../components/chart/RadarChart';
import BrushableScatterplot from '../components/chart/BushableScatterplot';
import LinkMap from '../components/chart/LinkMap'
import PendienteChart from '../components/chart/Pending';


const Home = () => {

  const puntosLocales = [
    { x: 10, y: 20 },
    { x: 30, y: 50 },
    { x: 50, y: 10 },
    { x: 70, y: 80 },
    { x: 20, y: 40 },
    { x: 40, y: 60 },
    { x: 60, y: 30 },
    { x: 80, y: 70 },
    { x: 15, y: 35 },
    { x: 35, y: 55 },
    { x: 55, y: 25 },
    { x: 75, y: 90 },
    { x: 25, y: 45 },
    { x: 45, y: 65 },
    { x: 65, y: 35 },
    { x: 85, y: 75 },
    { x: 12, y: 28 },
    { x: 32, y: 52 },
    { x: 52, y: 18 },
    { x: 72, y: 88 },
    { x: 28, y: 48 },
    { x: 48, y: 68 },
    { x: 68, y: 38 },
    { x: 88, y: 78 },
    { x: 18, y: 38 },
    { x: 38, y: 58 },
    { x: 58, y: 28 },
    { x: 78, y: 92 },
    { x: 22, y: 42 },
    { x: 42, y: 62 },
    { x: 62, y: 32 },
    { x: 82, y: 72 },
    { x: 11, y: 21 },
    { x: 31, y: 51 },
    { x: 51, y: 11 },
    { x: 71, y: 81 },
    { x: 21, y: 41 },
    { x: 41, y: 61 },
    { x: 61, y: 31 },
    { x: 81, y: 71 },
    { x: 16, y: 36 },
    { x: 36, y: 56 },
    { x: 56, y: 26 },
    { x: 76, y: 91 },
    { x: 26, y: 46 },
    { x: 46, y: 66 },
    { x: 66, y: 36 },
    { x: 86, y: 76 },
    { x: 19, y: 39 },
    { x: 39, y: 59 },
    { x: 59, y: 29 },
    { x: 79, y: 93 },
  ];

  const meteoros = [
    { nombre: 'Bólido A', a: 2.5, e: 0.7, i: 15, Omega: 45, w: 120 },
    { nombre: 'Bólido B', a: 3.2, e: 0.5, i: 10, Omega: 60, w: 140 }
  ]

  // Datos de ejemplo para el mapa
  const data = [
    {
        id: 1,
        lat: 40.4168,
        lon: -3.7038,
        title: 'Estación 1',
        date: '2023-10-27',
        video: '',
        height: 83
    },
    {
        id: 2,
        lat: 41.3851,
        lon: 2.1734,
        title: 'Estación 2',
        date: '2023-10-27',
        video: '',
        height: 30
    },
];


  return (
    <div className="app-container">
      <div className="cardx">

      <div className="box2" style={{ position: 'relative' }}>
            <div className="box" style={{ marginBottom: '1rem', position: 'relative', overflow: 'hidden' }}>
                <div className="map-title absolute top-10 left-0 z-10">
                    Último bólido registrado
                </div>
                <LinkMap data={data} />
                <Link className="button" to="/informe-bolido" style={{marginTop: '10px'}}>
                    Ver informe completo
                </Link>

                <div style={{ position: 'absolute', bottom: '100px', right: '20px',width: '300px', height: 'auto', zIndex:'9999', backgroundColor:'white', borderColor: 'black' , borderWidth: '1px'}}>
                <PendienteChart data={data} />
            </div>
            </div>
             
            
        </div>

        <div className="box2" style={{ marginBottom: '1rem', position: 'relative', overflow: 'hidden' }}>
        </div>

        <div className="grid">
          {/* Fila 1 */}
          <div className="box">
            <BarChart showTable={false} />
            <Link className="button" to="/bolide-graph">
              Ver más detalles
            </Link>
          </div>

          <div className="box ">
            <div className='close-box mt-4'>
              <RadarChart meteoros={meteoros} />
            </div>
            <Link className="button" to="/comparacion-bolidos">
              Ver más detalles
            </Link>
          </div>
        </div>

        <div className="box2" style={{ marginBottom: '1rem', position: 'relative', overflow: 'hidden' }}>
          <div className="map-title">
            Mapa de bolidos
          </div>

          <div className="map-container">
            <MapaMalaga />

          </div>
          <p className="map-description">
            Haciendo click en cualquiera de los puntos marcados, podrá ver más información al respecto
          </p>
        </div>

        

        {/* Botón de redirección */}
        {/* <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <Link className="button" to="/NuevaPagina">
            Ver el mapa completo
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Home;