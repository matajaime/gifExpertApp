import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('GifExpertApp tests',()=>{
    test('GifExpertApp snap shot init state',()=>{
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });
    test('GifExpertApp debe generar lista de ImageGrids',()=>{
        const categories = ['Mario','Zelda'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        const imageGrids = wrapper.find('ImageGrid');
        expect( imageGrids.length ).toBe( categories.length );
    });
});