import { getImagen } from "../../base-pruebas/11-async-await";

describe( 'Pruebas async await', ()=>{
    test('debe retornar url', async ()=>{
        const url = await getImagen();
        expect( url.includes('http') ).toBe(true);
    });
});