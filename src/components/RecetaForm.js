import React, { useState } from 'react';

const RecetaForm = ({ onRecetaSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [instrucciones, setInstrucciones] = useState('');
  const [tiempoPreparacion, setTiempoPreparacion] = useState(0);
  const [dificultad, setDificultad] = useState('Baja');
  const [participante, setParticipante] = useState('');

  // Estado para errores de validación
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (nombre.length < 3 || nombre.length > 100) {
      newErrors.nombre = 'El nombre debe tener entre 3 y 100 caracteres.';
    }
    if (!ingredientes) {
      newErrors.ingredientes = 'Debes ingresar al menos un ingrediente.';
    }
    if (tiempoPreparacion <= 1) {
      newErrors.tiempoPreparacion = 'El tiempo de preparación debe ser mayor a 1 minuto.';
    }
    if (!participante) {
      newErrors.participante = 'Debes ingresar un participante.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const nuevaReceta = {
      nombre,
      descripcion,
      ingredientes: ingredientes.split(','),
      instrucciones,
      tiempoPreparacion: parseInt(tiempoPreparacion),
      dificultad,
      participante
    };

    onRecetaSubmit(nuevaReceta);

    // Reiniciar los campos del formulario
    setNombre('');
    setDescripcion('');
    setIngredientes('');
    setInstrucciones('');
    setTiempoPreparacion(0);
    setDificultad('Baja');
    setParticipante('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear nueva receta</h2>
      <label>Nombre: </label>
      <input 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
        required 
      />
      {errors.nombre && <p style={{color: 'red'}}>{errors.nombre}</p>}
      <br />

      <label>Descripción: </label>
      <textarea 
        value={descripcion} 
        onChange={(e) => setDescripcion(e.target.value)} 
      />
      <br />

      <label>Ingredientes (separados por comas): </label>
      <input 
        value={ingredientes} 
        onChange={(e) => setIngredientes(e.target.value)} 
        required 
      />
      {errors.ingredientes && <p style={{color: 'red'}}>{errors.ingredientes}</p>}
      <br />

      <label>Instrucciones: </label>
      <textarea 
        value={instrucciones} 
        onChange={(e) => setInstrucciones(e.target.value)} 
      />
      <br />

      <label>Tiempo de Preparación (minutos): </label>
      <input 
        type="number" 
        value={tiempoPreparacion} 
        onChange={(e) => setTiempoPreparacion(e.target.value)} 
        min="1" 
        required 
      />
      {errors.tiempoPreparacion && <p style={{color: 'red'}}>{errors.tiempoPreparacion}</p>}
      <br />

      <label>Dificultad: </label>
      <select 
        value={dificultad} 
        onChange={(e) => setDificultad(e.target.value)}
      >
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>
      <br />

      <label>Participante: </label>
      <input 
        value={participante} 
        onChange={(e) => setParticipante(e.target.value)} 
        required 
      />
      {errors.participante && <p style={{color: 'red'}}>{errors.participante}</p>}
      <br />

      <button type="submit">Crear Receta</button>
    </form>
  );
};

export default RecetaForm;
