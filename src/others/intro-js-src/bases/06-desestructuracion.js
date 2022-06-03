
const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "IronMan",
    rango: "soldado"
};

const retornaPersona = ({nombre, clave, rango = "capitán"}) => {
    return {
        nombreClave: clave,
        rango: rango,
        latlong: {
            lat: 1.25,
            long: 3.45
        }
    }
}

const {nombreClave, rango, latlong:{lat, long}} = retornaPersona(persona);

console.log(nombreClave, rango);
console.log(lat, long);

