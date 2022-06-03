
const nombre = 'Miguel';
const apellido = 'Mata';

const nombreCompleto = `${nombre} ${apellido}
Res 1 + 1: ${1+1}`;

function saluda(nombre) {
    return("Hola " + nombre);
}

console.log( `${saluda(nombreCompleto)}` );
