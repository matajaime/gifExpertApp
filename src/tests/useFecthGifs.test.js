import { useFetchGifs } from '../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('fetch Gifs custom hook tests',()=>{
    test('Verificar estado inicial del fetch',()=>{
        const resp = renderHook( () => {
            return useFetchGifs('Mario');
        });
        const { result } = resp;
        const { data, loading } = result.current;
        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    });
    test('Verificar carga de datos del fetch',async()=>{
        const resp = renderHook( () => {
            return useFetchGifs('Mario');
        });
        const { result, waitForNextUpdate } = resp;
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect( data.length > 0 ).toBe( true );
        expect( loading ).toBe( false );
    });
});