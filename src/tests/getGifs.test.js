import { getGifs } from "../helpers/getGifs";

describe('Pruebas del fetch de GetGigs',()=>{
    test('Debe traer elementos en respuesta',async()=>{
        const gifs = await getGifs('Mario');
        expect(gifs.length > 0).toBe(true);
    });
});