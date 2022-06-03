
import { getHeroeById } from "../bases/08-impexp";

const getHeroByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("2 seg después");
            const heroe = getHeroeById(id);
            if ( heroe ) {
                resolve(heroe);
            } else {
                reject("fallé");
            }
        }, 2000);
    });    
};

getHeroByIdAsync(4).then( (heroe) => {
    console.log("Then de la promesa");
    console.log("Heroe: ");
    console.log(heroe);
}).catch( err => console.warn(err));


