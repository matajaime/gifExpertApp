import '@testing-library/jest-dom';

import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes.js';

describe( 'Pruebas de heroes', () => {
    test('Heroe by id debe de regresar un heroe', () => {
        const id = 1;
        const heroeTest = getHeroeById(id);
        const heroe = heroes.find( h => h.id === id );
        expect( heroe ).toEqual( heroeTest );
    });
    test('Heroe no encontrado debe ser undefined', () => {
        const id = 10;
        const heroeTest = getHeroeById(id);
        expect( heroeTest ).toBe(undefined);
    });
    test('Heroes by owner debe de regresar un arreglo de heroes', () => {
        const owner = 'DC';
        const heroesTest = getHeroesByOwner(owner);
        const heroesR = heroes.filter( h => h.owner === owner );
        expect( heroesR ).toEqual( heroesTest );
    });
    test('Heroes by owner de Marvel deben de ser 2', () => {
        const owner = 'Marvel';
        const heroesTest = getHeroesByOwner(owner);
        expect( heroesTest.length ).toBe( 2 );
    });
});