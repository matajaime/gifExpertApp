
const persona = {
    nombre: 'Miguel',
    apellido: 'Mata',
    edad: 46,
    direccion: {
        calle: 'Mariano',
        numero: 193,
        latitud: 1.24
    }
};

//console.table( persona );
const persona2 = {...persona};
persona2.direccion = {...persona.direccion};

persona.apellido = 'Estrada';
persona.direccion.calle = 'Escobedo'; 

console.log( persona );
console.log( persona2 );