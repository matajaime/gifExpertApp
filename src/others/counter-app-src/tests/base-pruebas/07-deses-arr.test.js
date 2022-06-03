import '@testing-library/jest-dom';

import { retornaArreglo } from '../../base-pruebas/07-deses-arr';


describe('Prueba de arreglos', () => {
    test('Debe retornar 1 string y 1 número', () => {
        const [letras, numeros] = retornaArreglo();
        expect( typeof letras ).toBe('string');
        expect( typeof numeros ).toBe('number');
    });
});