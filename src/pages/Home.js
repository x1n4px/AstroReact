// Componentes
import MapaMalaga from '../components/MapaMalaga';
import BarChart from '../components/BarChart';
import RadarChart from '../components/RadarChart';
import '../index.css';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap'


const Home = () => {

  return (
    <div className="app-container">
      <div className="card">
        <div className="grid">
          {/* Fila 1 */}
          <div className="box">
            <BarChart showTable={false} />
            <Link className="button" to="/bolide-graph">
              Ver más detalles
            </Link>
          </div>

          <div className="box">
            <RadarChart />
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




        {/* <div className="grid">
          <div className="box"></div>
          <div className="box"></div>
        </div> */}

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