import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const [selectedData, setSelectedData] = useState(null); // Estado para guardar los datos seleccionados
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Bólidos por mes',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Opciones de configuración del gráfico
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Bólidos de los últimos 6 meses',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    // Detectar clics en las barras
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index; // Obtener el índice de la barra seleccionada
        const selectedValue = data.datasets[0].data[index]; // Obtener el valor de esa barra
        setSelectedData({
          month: data.labels[index],
          value: selectedValue,
        });
      }
    },
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', paddingTop: '50px' }}>
      <h2>Gráfico de Bólidos</h2>
      <Bar data={data} options={options} />

      {/* Mostrar la tabla solo si hay datos seleccionados */}
      {selectedData && (
        <div style={{ marginTop: '30px' }}>
          <h3>Detalles del mes: {selectedData.month}</h3>
          <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Latitud</th>
                <th>Longitud</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>dd/mm/yyyy</td>
                <td>36.653253</td>
                <td>-4.541016</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BarChart;
