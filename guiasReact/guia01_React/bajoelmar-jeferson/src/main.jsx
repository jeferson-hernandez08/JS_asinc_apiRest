import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
//import App from './App.jsx'
import { animales } from './animales.js'

function App () { // Convertir todo en un componente funcional
  const titulo = "";
  const mostrarFondo = true; // Definir la variable faltante
  
  const fondo = (
    <img 
      className='fondo'
      alt='fondoOceano'
      src='/imagenes/fondoOceano.png'
    />
  );
  
  const imagenes = [];
  for (const animal in animales) {
    imagenes.push(
      <img 
        key={animal}
        className="animal"
        alt={animal}
        src={animales[animal].imagen}
        ariaLabel={animal}
        role="button"
        onClick={mostrarHecho}
      />
    )
  }
  
  function mostrarHecho(e) {
    const animalSeleccionado = e.target.alt;
    const animalInfo = animales[animalSeleccionado];
    const indiceOpcion = Math.floor(Math.random() * animalInfo.hechos.length);
    const hecho = animalInfo.hechos[indiceOpcion];
    document.getElementById("hecho").innerHTML = hecho;
  }

  return (
    <div>
      <h1>{titulo === "" ? "Click Sobre un Animal" : titulo}</h1>
      {mostrarFondo && fondo}
      <p id='hecho'></p>
      <div className="animales">
        {imagenes}
      </div>
    </div>
  );

};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
