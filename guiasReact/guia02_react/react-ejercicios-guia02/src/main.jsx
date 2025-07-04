import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
// import React from 'react'
import './index.css'

// class AdsoFirth extends React.Component {
class AdsoFirtsComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hola, este es el primer componente ADSO !</h1>
      </div>
    );
  }
}

class CitaCelebre extends Component {
  render() {
    return (
      <div>
        <h2>Una cita célebre:</h2>
        <p>"El único modo de hacer un gran trabajo es amar lo que haces." - Steve Jobs</p>
        <cite>
          <a href="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRP58VzM-V59PKVVtl0YcpbQU9WFPlA4lP92_fFGxcBbZKyBTEyTCw-WfJ4Ps7ZAlu5zxyTdlhtM0xMNEYdAgM1w" target="_blank" rel="noopener noreferrer">
            Fuente: Steve Jobs, discurso en la Universidad de Stanford, 2005
          </a>
        </cite>
      </div>
    );
  }
}

const julio = {
  title: 'Meme de julio',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyXWVV2FxTWXqw3Z3FW89TW2B132QRwxzeGQ&s',
}

class MemeDeJulio extends Component {
  render() {
    return (
      <div>
        <h2>{julio.title}</h2>
        <img 
          src={julio.image} 
          alt={julio.title} 
          width={300}
        />
      </div>
    );
  }
}

// Componente con lógica
class Ramdon extends Component {
  // La lógica del componente siempre va dentro del método render
  render() {
    const num = Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
    return (
      <div>
        <h2>Número aleatorio es: </h2>
        <p>{num}</p>
      </div>
    );
  }
}

// Componente con Condicionales
class MyPlan extends Component {
  render() {
    const apocalipsis = false; // Cambia a false para ver el otro mensaje
    let plan;
    if (!apocalipsis) {
      plan = <p>¡Presentar el proyecto formativo!</p>
    }
    else {
      plan = <p>¡Prepárate para el apocalipsis!</p>
    }
    return (
      <div>
        <h2>Mi plan para hoy:</h2>
        <p>{plan}</p>
      </div>
    ); 
  }
} 

class Button extends Component {
  onClickEvent() {
    alert('Click al botón');
  }

  render() {
    return (
      <button onClick={this.onClickEvent}>Haz clic aquí</button>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdsoFirtsComponent />
    <hr/>
    <CitaCelebre />
    <hr/>
    <MemeDeJulio />
    <hr/>
    <Ramdon />
    <Ramdon />
    <hr/>
    <MyPlan />
    <hr/>
    <Button />
  </StrictMode>,
)
