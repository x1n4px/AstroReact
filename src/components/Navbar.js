import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: '#007bff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          style={{ fill: 'white', marginRight: '10px' }}
        >
          <path
            d="M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.736a1 1 0 0 0-.686.894zm16.464-3.971-4.182 12.73-2.534-5.522a.998.998 0 0 0-.492-.492L5.734 9.841l12.732-4.182z"
          ></path>
        </svg>

        <span
          style={{
            color: 'white',
            fontWeight: '600',
            fontSize: '1.5rem',
            textTransform: 'uppercase',
          }}
        >
          AstroExample
        </span>
      </Link>

      {/* Opcional: Agregar un botón de menú o enlaces adicionales en el navbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >

        <Link
          to="/"
          style={{
            color: 'white',
            fontWeight: '500',
            fontSize: '1rem',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Inicio
        </Link>
        <Link
          to="/station"
          style={{
            color: 'white',
            fontWeight: '500',
            fontSize: '1rem',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Estaciones
        </Link>
        {/* <Link
          to="/videos"
          style={{
            color: 'white',
            fontWeight: '500',
            fontSize: '1rem',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Videos
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
