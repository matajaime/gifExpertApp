import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../components/AddCategory';
import '@testing-library/jest-dom';

describe('Tests AddCategory component',()=>{
    test('Snapshot test initial state',()=>{
        const funcAddCategory = jest.fn();
        const wrapper = shallow(<AddCategory addCategory={funcAddCategory}/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de cambiar el input',()=>{
        const funcAddCategory = jest.fn();
        const wrapper = shallow(<AddCategory addCategory={funcAddCategory}/>);
        let input = wrapper.find('input');
        input.simulate('change', {
            target: {
                value: 'MiCategoria'
            }
        });
        input = wrapper.find('input');
        expect(input.props().value).toBe('MiCategoria');
    });
    test('Verficiar submit sin datos - no debe de llamar addCategory',()=>{
        const funcAddCategory = jest.fn();
        const wrapper = shallow(<AddCategory addCategory={funcAddCategory}/>);
        const forma = wrapper.find('form');
        forma.simulate('submit', {
            preventDefault: ()=>{}
        })
        expect( funcAddCategory ).not.toHaveBeenCalled();
    });
    test('Debe llamar addCategory y limpiar la caja de texto',()=>{
        const funcAddCategory = jest.fn();
        const wrapper = shallow(<AddCategory addCategory={funcAddCategory}/>);
        let input = wrapper.find('input');
        input.simulate('change', {
            target: {
                value: 'MiCategoria'
            }
        });
        const forma = wrapper.find('form');
        forma.simulate('submit', {
            preventDefault: ()=>{}
        })
        expect( funcAddCategory ).toHaveBeenCalled();
        //expect( funcAddCategory ).toHaveBeenCalledWith( expect.any(Function) );
        expect( funcAddCategory ).toHaveBeenCalledWith( expect.any(String) );
        input = wrapper.find('input');
        expect(input.props().value).toBe('');
    });
});