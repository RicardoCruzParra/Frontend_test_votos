import React, { useState, useEffect } from 'react';
import RecetaList from './components/RecetaList';
import RecetaForm from './components/RecetaForm';
import axios from 'axios';

function App() {
  const [recetas, setRecetas] = useState([]);

  // Función para obtener las recetas desde el backend
  const fetchRecetas = () => {
    axios.get('/api/recetas')
      .then(response => setRecetas(response.data))
      .catch(error => console.error('Error al obtener las recetas:', error));
  };

  // Función para crear una receta
  const handleRecetaSubmit = (receta) => {
    axios.post('/api/recetas', receta)
      .then(() => fetchRecetas())
      .catch(error => console.error('Error al crear receta:', error));
  };

  useEffect(() => {
    fetchRecetas();
  }, []);

  return (
    <div className="App">
      <h1>Gestión de Recetas</h1>
      <RecetaForm onRecetaSubmit={handleRecetaSubmit} />
      <RecetaList recetas={recetas} />
    </div>
  );
}

export default App;
