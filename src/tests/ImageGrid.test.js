import React from 'react';
import { shallow } from 'enzyme';
import { ImageGrid } from '../components/ImageGrid';
import { useFetchGifs } from "../hooks/useFetchGifs";
jest.mock("../hooks/useFetchGifs");

describe('ImgGrid tests', ()=>{
    const category = 'Mario';
    test('SnapShot of init state of Grid',() => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true    
        });
        const wrapper = shallow(<ImageGrid key={category} category={category} />);
        expect(wrapper).toMatchSnapshot();
        const pLoading = wrapper.find('p');
        expect( pLoading.exists() ).toBe( true );
    });
    test('snapshot of grid populated', ()=>{
        const imgs = [{
            id: 1,
            url: 'https://test.domain.com/test/path/img.jpg',
            title: 'test title'
        },{
            id: 2,
            url: 'https://test.domain.com/test/path/img2.jpg',
            title: 'test title 2'
        }];
        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false    
        });
        const wrapper = shallow(<ImageGrid key={category} category={category} />);
        expect(wrapper).toMatchSnapshot();
        const pLoading = wrapper.find('p');
        expect( pLoading.exists() ).toBe( false );
        const gridItems = wrapper.find('ImgGridItem');
        expect( gridItems.length ).toBe( imgs.length );
    });
});