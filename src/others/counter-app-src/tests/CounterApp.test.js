import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas CounterApp',()=>{
    const wrapper = shallow(<CounterApp />);
    test('Prueba de snapShot base sin parametros', ()=>{
        expect(wrapper).toMatchSnapshot();        
    });
    test('Verificar contador inicial enviado por parámetro',()=>{
        const contadorInicial = 100;
        const wrapper = shallow(<CounterApp value={contadorInicial} />);
        const contador = Number(wrapper.find('h2').text());
        expect( contador ).toBe( contadorInicial );
    });
    test('Verificar incremento de contador',()=>{
        const buttonAdd = wrapper.find('button').at(0);
        const contadorOld = Number(wrapper.find('h2').text());
        buttonAdd.simulate('click');
        const contadorNew = Number(wrapper.find('h2').text());
        expect( contadorNew ).toBe( contadorOld + 1);
    });
    test('Verificar reducción de contador',()=>{
        const buttonSub = wrapper.find('button').at(2);
        const contadorOld = Number(wrapper.find('h2').text());
        buttonSub.simulate('click');
        const contadorNew = Number(wrapper.find('h2').text());
        expect( contadorNew ).toBe( contadorOld - 1);
    });
    test('Verificar reset',()=>{
        const contadorInicial = 111;
        const wrapper = shallow(<CounterApp value={contadorInicial} />);
        const buttonSub = wrapper.find('button').at(2);
        buttonSub.simulate('click');
        const buttonReset = wrapper.find('#btnReset');
        buttonReset.simulate('click');
        const contador = Number(wrapper.find('h2').text());
        expect( contador ).toBe( contadorInicial );
    });
});