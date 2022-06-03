import '@testing-library/jest-dom';
import { getSaludo } from '../../base-pruebas/02-template-string';

describe( 'Pruebas Template String', () => {
    test( 'Get Saludo debe de regresar el nombre', () => {
        const nombre = 'Miguel';
        const saludo = getSaludo(nombre);
        expect( saludo ).toBe('Hola '+nombre);
    });
    test( 'Get saludo sin nombre', () => {
        const saludo = getSaludo();
        expect( saludo ).toBe('Hola Carlos');
    });
});
