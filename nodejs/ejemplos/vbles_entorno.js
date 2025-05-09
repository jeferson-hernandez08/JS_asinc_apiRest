let nombre = process.env.NOMBRE || 'NN';  // Si no existe la variable de entorno, se asigna un valor por defecto
let ciudad = process.env.CIUDAD || 'sin ciudad';  // Si no existe la variable de entorno, se asigna un valor por defecto
console.log(`Hola mi nombre es ${nombre} y soy de ${ciudad} !`);   