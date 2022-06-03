import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe( 'Pruebas promesas', () => {
    test('Promesa', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then( heroe => {
            expect( heroe ).toEqual( heroes[0] );
            done();
        });
    });
    test('Promesa con error', (done) => {
        const id = -1;
        getHeroeByIdAsync(id).catch( error => {
            expect( error ).toBe( 'No se pudo encontrar el héroe' );
            done();
        });
    });
});