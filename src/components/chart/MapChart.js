


import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';



const MapChart = ({ data }) => {
    return (
        <MapContainer center={[36.7213, -4.4216]} zoom={11} style={{ width: '100%', height: '800px' }}>
            {/* Capa base del mapa (Mapa de OpenStreetMap) */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Marcadores */}
            {data.map((punto, index) => (
                <Marker
                    key={index}
                    position={[punto.lat, punto.lon]}
                    icon={new L.Icon({ iconUrl: 'https://cdn-icons-png.flaticon.com/512/252/252025.png', iconSize: [25, 25] })}
                >
                    <Popup>
                        <div>
                            <p>{punto.title}</p>
                            <button
                                onClick={() => alert(`Botón del ${punto.title} presionado`)}
                                style={{
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                Ver detalles
                            </button>
                        </div>
                    </Popup>
                </Marker>

            ))}
        </MapContainer>
    );
}

export default MapChart;