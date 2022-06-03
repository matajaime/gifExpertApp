
import { heroes } from '../data/heroes';

//console.log( heroes );

export const getHeroeById = (idHeroe) => {
    return heroes.find(({id}) => idHeroe == id);
};

//console.log(getHeroeById(1));

export const getHeroesByOwner = (ownerHeroe) => {
    return heroes.filter(({owner}) => ownerHeroe == owner);
};

//console.log(getHeroesByOwner('Marvel'));
