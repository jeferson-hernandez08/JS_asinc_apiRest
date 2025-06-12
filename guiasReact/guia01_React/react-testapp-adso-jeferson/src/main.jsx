import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'

// Asignar a la variable un elemento JSX
const formationCenter = <h1>Centro de Processos Industriales y Construcción</h1>
// Elemento JSX de varias líneas - Se debe tener un contendor único
const formationPrograms = (
  <>
    <h2>Programas de Formación</h2>
    <ul>
      <li>Análisis y Desarrollo de Software</li>
      <li>Matenimeinto de automotores</li>
      <li>Programación de Videojuegos</li>
      <li>Diseño Gráfico y Multimedia</li>
      <li>Administración de Bases de Datos</li>
    </ul>
  </>
)

// Elemento JSX con una clase para CSS - Atributo className
const bigDiv = <div className='bigDiv'>I'm a big Div</div>

// Elementos JSX con expresiones matemáticas dentro de llaves - Se debe encerrar la expresión entre llaves {}
const sumElement = <h2>2 + 3</h2>
const sumElement2 = <h2>{2 + 3}</h2>
const sumElement3 = <h2>2 + 3 = {2 + 3}</h2>
let sum = 4 + 2;
const sumElement4 = <h2>4 + 2 = {sum}</h2>

// Elementos JSX con varios atributos y variables
const heightImage = '250px';
const widthImage = '350px';
const imgSena = <img 
                      src='https://boyacavisible.com/wp-content/uploads/2024/04/Convocatoria-Sena-780x470.jpg'
                      alt='Aprendices SENA'
                      height ={heightImage}
                      width  ={widthImage} 
                /> 

// Elemento JSX con una imagen local
const ferrari = <img
                      src='/img/Ferrari_296.jpg'
                      alt='Ferrari 296 GTS'
                      height ={heightImage}
                      width  ={widthImage} 
                />

// Manejo de objetos en JSX | Tipo json
const pics = {
  lion: 'https://static.vecteezy.com/system/resources/previews/026/525/162/non_2x/lion-animal-isolated-photo.jpg',
  spider: 'https://www.purcorpest.com/wp-content/uploads/2024/11/Wolf-Spiders.jpg',
  elephant: 'https://cms.bbcearth.com//sites/default/files/factfiles/2024-07/el2.jpg',
}

const lionImg = <img
  src={pics.lion}
  alt='Lion'
  height='200px'
/>

const spiderImg = <img
  src={pics.spider}
  alt='Spider'
  height='200px'
/>

// Manejo de condicionales en JSX
const user = {
  name: 'Lucho Díaz',
  email: 'lucho@gmail.com',
  age: 50,
}

const drinkingAge = 18;
let message;
if (user.age >= drinkingAge) {
  message = <p>Welcome {user.name}, you can drink alcohol.</p>
} else {
  message = <p>Sorry {user.name}, you can drink juice.</p>
}

const elephantImg = <img
  src={pics.elephant}
  alt='Elephant'
  height='200px'
/>

// Operador ternario en JSX
const canDrink = <h2>{user.age >= drinkingAge ? "Drink a beer" : "Drink milk"}</h2>

// Operador lógico && (and) en JSX
const drinks = ( 
  <>
    <h2>Drinks by age. You are {user.age} year old</h2>
    <ul>
      {user.age <= 2 && <li>Breast milk</li>}
      {user.age > 2 && <li>Juice</li>}
      {user.age >= 18 && <li>Beer</li>}
      {user.age > 3 && <li>Water panela</li>}
      {user.age > 10 && user.age < 60 && <li>Coffe</li>}
    </ul>
  </>
)

// Manejo de arrays en JSX y la función map
const menuItems = ['Home', 'News', 'Contact Us', 'Services'];
const menu = menuItems.map(item => <li Key={item}>{item}</li>)
const manuElement = <ul>{menu}</ul>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {formationCenter}
    {formationPrograms}
    <br/>    
    <p>Hello ADSO 2873711 !!!</p>
    {bigDiv}
    {sumElement}
    {sumElement2}
    {sumElement3}
    {sumElement4}
    {imgSena}
    {ferrari}
    {lionImg}
    {spiderImg}
    {elephantImg}
    {message}
    {canDrink}
    {drinks}
    {manuElement}
  </StrictMode>,
)
