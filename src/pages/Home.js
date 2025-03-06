// Componentes
import MapaMalaga from '../components/MapaMalaga';
import BarChart from '../components/BarChart';
import RadarChart from '../components/RadarChart';
import '../App.css';
import {Link } from "react-router-dom";

import NuevaPagina from './NuevaPagina'

const Home = () => {
    return (
        <div className="app-container">
        <div className="card">
          <div className="grid">
            {/* Fila 1 */}
            <div className="box">
              <BarChart />
            </div>
            <div className="box">
              <RadarChart />
            </div>
          </div>
  
          <div style={{ marginBottom: '1rem' }}>
            {/* Fila 2: Mapa */}
            <div className="map-container">
              <MapaMalaga />
            </div>
          </div>
  
          <div className="grid">
            {/* Fila 3 */}
            <div className="box"></div>
            <div className="box"></div>
          </div>
  
          {/* Botón de redirección */}
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <Link className="button" to="/NuevaPagina">
              Ver el mapa completo
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Home;