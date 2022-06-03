//import {render} from '@testing-library/react';
import React from 'react';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';


describe('Test Primera APP',()=>{
    /*test('Debe mostrar mensaje',()=>{
        const saludo = 'Hola CHicos';
        const {getByText} = render(<PrimeraApp saludo={saludo}/>);
        expect(getByText(saludo)).toBeInTheDocument();
    });*/
    test('Debe mostrar PrimeraApp correctamente',() => {
        const saludo = 'Hola Chicos';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe mostrar subtitulo enviado',() => {
        const saludo = 'Saludo de prueba';
        const subtitulo = "¡Subtitulo de Prueba!";
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo}/>);
        expect(wrapper).toMatchSnapshot();
        //buscar elemento html p (parrafo), puedes hacerlo por id '#id' o por clase '.class'
        //Si hay varios devuelve arreglo
        const textoParrafo = wrapper.find('p').text();
        expect( textoParrafo ).toBe( subtitulo);
    });
});