import React from 'react';

const Budget = () => {
  return (
    <div className="budget-container">
      <h2>Solicitar Presupuesto</h2>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Correo:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="details">Detalles:</label>
        <textarea id="details" name="details" rows="4" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Budget;
