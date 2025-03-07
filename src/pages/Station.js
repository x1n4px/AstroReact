

import StationMapChart from '../components/chart/StationMapChart'


const Station = () => {

    // 0 -> Active
    // 1 -> under construction
    // 2 -> Colaboration
    const stations = [
        {
            id: 0,
            lat: 39.0742,
            lon: -6.3996,
            title: 'Estación Sierra de Fuentes (Cáceres)',
            state: 0
        },
        {
            id: 1,
            lat: 36.1408,
            lon: -5.4613,
            title: 'Estación Green Globe (Algeciras, Cádiz)',
            state: 0
        },
        {
            id: 2,
            lat: 37.8882,
            lon: -4.7794,
            title: 'Estación El Viso (Córdoba)',
            state: 0
        },
        {
            id: 3,
            lat: 42.3406,
            lon: -3.7026,
            title: 'Estación Valpuesta (Burgos)',
            state: 0
        },
        {
            id: 4,
            lat: 40.6333,
            lon: -1.6167,
            title: 'Estación Villaverde del Ducado (Guadalajara)',
            state: 0
        },
        {
            id: 5,
            lat: 43.3667,
            lon: -6.25,
            title: 'Estación Muñás de Arriba (Asturias)',
            state: 0
        },
        {
            id: 6,
            lat: 41.5333,
            lon: 2.4419,
            title: 'Estación Mataró (Barcelona)',
            state: 0
        },
        {
            id: 7,
            lat: 41.5400,
            lon: 2.3050,
            title: 'Estación Cabrils (Barcelona)',
            state: 0
        },
        {
            id: 8,
            lat: 41.5500,
            lon: 1.8222,
            title: 'Estación Masquefa (Barcelona)',
            state: 0
        },
        {
            id: 9,
            lat: 28.9634,
            lon: -13.5416,
            title: 'Estación Nazaret (Lanzarote)',
            state: 0
        },
        {
            id: 10,
            lat: 36.7213,
            lon: -4.4214,
            title: 'Estación Málaga',
            state: 0
        },
        {
            id: 11,
            lat: 39.7500,
            lon: -0.4167,
            title: 'Estación Segorbe (Castellón)',
            state: 0
        },
        {
            id: 12,
            lat: 28.5000,
            lon: -13.8667,
            title: 'Estación Puerto del Rosario (Fuerteventura)',
            state: 0
        },
        {
            id: 13,
            lat: 41.6167,
            lon: 1.8333,
            title: 'Estación San Martí de Sesgueioles (Barcelona)',
            state: 0
        },
        {
            id: 14,
            lat: 41.5333,
            lon: 2.0333,
            title: 'Estación Rubí (Barcelona)',
            state: 0
        },
        {
            id: 15,
            lat: 41.5400,
            lon: 2.4419,
            title: 'Estación COSMOS-Mataró (Barcelona)',
            state: 0
        },
        {
            id: 16,
            lat: 36.7200,
            lon: -4.5000,
            title: 'Estación Coín (Málaga)',
            state: 0
        },
        {
            id: 17,
            lat: 38.3450,
            lon: -0.4833,
            title: 'Estación Alicante',
            state: 0
        },
        {
            id: 18,
            lat: 39.7167,
            lon: -1.1667,
            title: 'Estación Aras de los Olmos (Valencia)',
            state: 0
        },
        {
            id: 19,
            lat: 41.9833,
            lon: 2.8167,
            title: 'Estación Sant Gregori (Girona)',
            state: 0
        },
        {
            id: 20,
            lat: 39.7000,
            lon: 2.9000,
            title: 'Estación Consell (Mallorca)',
            state: 0
        },
        {
            id: 21,
            lat: 40.8000,
            lon: -4.1000,
            title: 'Estación El Espinar (Segovia)',
            state: 1
        },
        {
            id: 22,
            lat: 41.6667,
            lon: -4.9000,
            title: 'Estación Boecillo (Valladolid)',
            state: 1
        },
        {
            id: 23,
            lat: 40.6167,
            lon: -2.9167,
            title: 'Estación El Cuartillejo (Guadalajara)',
            state: 1
        },
        {
            id: 24,
            lat: 40.3333,
            lon: -1.3000,
            title: 'Estación Vegas del Codorno',
            state: 1
        },
        {
            id: 25,
            lat: 43.4636,
            lon: -3.4292,
            title: 'Estación Santoña',
            state: 1
        },
        {
            id: 26,
            lat: 42.4667,
            lon: 2.0167,
            title: 'Estación Bolvir (Girona)',
            state: 1
        },
        {
            id: 27,
            lat: 37.0667,
            lon: -6.7333,
            title: 'Observatorio BOOTES-1 (Mazagón, Huelva)',
            state: 2
        },
        {
            id: 28,
            lat: 36.7000,
            lon: -4.0000,
            title: 'Observatorio BOOTES-2 (Algarrobo, Málaga)',
            state: 2
        },
        {
            id: 29,
            lat: -45.8000,
            lon: 169.2167,
            title: 'Observatorio BOOTES-3 (Lauder, Nueva Zelanda)',
            state: 2
        },
        {
            id: 30,
            lat: 31.6000,
            lon: -115.4500,
            title: 'Observatorio BOOTES-5 (San Pedro Mártir, México)',
            state: 2
        },
        {
            id: 31,
            lat: -29.7456,
            lon: 26.6870,
            title: 'Observatorio BOOTES-6 (Boyden, Sudáfrica)',
            state: 2
        },
        {
            id: 32,
            lat: -22.9200,
            lon: -68.2000,
            title: 'Observatorio BOOTES-7 (San Pedro de Atacama, Chile)',
            state: 2
        }
    ];
    


    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'center' }}>
                Mapa de Estaciones Espaciales
            </h1>

            <p style={{ fontSize: '1.2rem', marginBottom: '20px', textAlign: 'center' }}>
            La Red de detección de Bólidos y Meteoros de la Universidad de Málaga y de la Sociedad Malagueña de Astronomía está distribuida en veintisiete ubicaciones del territorio español. Consta a fecha de hoy de veintiuna estaciones en funcionamiento y otras siete en proceso de instalación, además de utilizar las cámaras allsky de la Red Global BOOTES (IAA/CSIC). En todas ellas se ejecuta un software de producción propia, tanto para el control de la instrumentación como para el procesado de imágenes e identificación de meteoros.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <StationMapChart data={stations} activePopUp={true} lat={40.415417} lon={-3.695642} zoom={4} />
            </div>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', textAlign: 'center' }}>
                Lista de Estaciones
            </h2>

            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
    {stations.map(station => (
        <li key={station.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '10px',
            fontSize: '1.1rem'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <span style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: station.state === 0 ? 'green' : station.state === 1 ? 'orange' : 'blue',
                    marginRight: '10px'
                }}></span>
                <span style={{ fontWeight: 'bold', color: '#333' }}>{station.title}</span>
            </div>
            <span style={{
                color: station.state === 0 ? 'green' : station.state === 1 ? 'orange' : 'blue',
                fontWeight: 'bold',
                fontSize: '1rem',
                textTransform: 'capitalize'
            }}>
                {station.state === 0 ? 'Activo' : station.state === 1 ? 'En construcción' : 'Colaboración'}
            </span>
        </li>
    ))}
</ul>

        </div>
    );


};

export default Station;