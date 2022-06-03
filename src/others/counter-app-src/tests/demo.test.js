
describe( 'Pruebas Demo', () => {
    test( 'Mensajes deben ser iguales', () => {

        const mensaje1 = "Hola";
        const mensaje2 = `Hola`;
        expect( mensaje1 ).toBe( mensaje2 );
        
    });
    
});

//old script test in package.json "react-scripts test",
//new option 1 "jest --watchAll",
