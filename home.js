import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenido a Reformer Spain SA</h1>
      <div className="home-buttons">
        <Link to="/budget" className="button">Solicitar Presupuesto</Link>
        <Link to="/user" className="button">Acceso de Usuarios</Link>
      </div>
    </div>
  );
};

export default Home;
