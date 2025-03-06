import './App.css';
import MapaMalaga from './components/MapaMalaga';
import BarChart from './components/BarChart';
import RadarChart from './components/RadarChart';

function App() {
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
          <button className="button">
            Redirigir
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
