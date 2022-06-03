
const usaState = ( valor ) => {
    return [ valor, () => {console.log('Hola Mundo')}];
};

const [nombre, setNombre] = usaState('Mike');
console.log(nombre);
setNombre();
