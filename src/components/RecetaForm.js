import React, { useState } from 'react';

const RecetaForm = ({ onRecetaSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [instrucciones, setInstrucciones] = useState('');
  const [tiempoPreparacion, setTiempoPreparacion] = useState(0);
  const [dificultad, setDificultad] = useState('Baja');
  const [participante, setParticipante] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaReceta = {
      nombre,
      descripcion,
      ingredientes: ingredientes.split(','),
      instrucciones,
      tiempoPreparacion,
      dificultad,
      participante
    };
    onRecetaSubmit(nuevaReceta);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear nueva receta</h2>
      <label>Nombre: </label>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      <br />

      <label>Descripción: </label>
      <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      <br />

      <label>Ingredientes (separados por comas): </label>
      <input value={ingredientes} onChange={(e) => setIngredientes(e.target.value)} required />
      <br />

      <label>Instrucciones: </label>
      <textarea value={instrucciones} onChange={(e) => setInstrucciones(e.target.value)} />
      <br />

      <label>Tiempo de Preparación (minutos): </label>
      <input type="number" value={tiempoPreparacion} onChange={(e) => setTiempoPreparacion(e.target.value)} min="1" required />
      <br />

      <label>Dificultad: </label>
      <select value={dificultad} onChange={(e) => setDificultad(e.target.value)}>
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>
      <br />

      <label>Participante: </label>
      <input value={participante} onChange={(e) => setParticipante(e.target.value)} required />
      <br />

      <button type="submit">Crear Receta</button>
    </form>
  );
};

export default RecetaForm;
