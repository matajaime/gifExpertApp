import React from 'react';
import { shallow } from 'enzyme';
import { ImgGridItem } from '../components/ImgGridItem';

describe('ImgGridItem tests', ()=>{
    const img = {
        url: 'MiLiga',
        title: 'MiTitulo'
    };
    const wrapper = shallow(<ImgGridItem img={img} />);
    test('SnapShot of init state of GridItem',() => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Title should match the paragraph',()=>{
        const paragraph = wrapper.find('p').text().trim();
        expect(paragraph).toBe(img.title);
    });
    test('Image source should match url', () => {
        const imgSrc = wrapper.find('img').props().src;
        expect(imgSrc).toBe(img.url);
    });
    test('Component should have animate__fadeInDownBig effect',()=>{
        const div = wrapper.find('div');
        const actual = div.props().className.indexOf('animate__fadeInDownBig') >= 0;
        expect( actual ).toBe( true );
    })
});