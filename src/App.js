import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
    <Router>
      <div className="App">
        <h1>Gestión de Recetas</h1>
        
        {/* Links para navegar entre páginas */}
        <nav>
          <ul>
            <li>
              <Link to="/crear">Crear Receta</Link>
            </li>
            <li>
              <Link to="/recetas">Ver Recetas</Link>
            </li>
          </ul>
        </nav>

        {/* Definimos las rutas */}
        <Routes>
          {/* Ruta para crear una receta */}
          <Route 
            path="/crear" 
            element={<RecetaForm onRecetaSubmit={handleRecetaSubmit} />} 
          />
          
          {/* Ruta para ver y votar recetas */}
          <Route 
            path="/recetas" 
            element={<RecetaList recetas={recetas} setRecetas={setRecetas} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
