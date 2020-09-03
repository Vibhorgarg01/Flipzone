import React from 'react' 
import { shallow } from 'enzyme';
//import { findByTestAtrr } from './../../../Utils';
import header from './App';
import App from './App';

const setUp = (props={}) => {
    const component = shallow(<App {...props} />);
    return component;
};

describe('Header Component', () => {

    

    it('Should render without errors', () => {
        const component=setUp()
        const wrapper = component.find('.headerComponent');
        expect(wrapper.length).toBe(5);
    });

    

});