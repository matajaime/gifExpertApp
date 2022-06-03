import '@testing-library/jest-dom';
import { getUser } from '../../base-pruebas/05-funciones';
import { getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe ( 'Pruebas funciones', () => {

    test( 'GetUser debe regresar objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'            
        };
        const user = getUser();
        expect( user ).toEqual(userTest);
    });

    test( 'GetActiveUser debe regresar objeto', () => {
        const nombre = 'Mike';
        const userActivoTest = {
            uid: 'ABC567',
            username: nombre       
        };
        const user = getUsuarioActivo(nombre);
        expect( user ).toEqual( userActivoTest );
    });

});