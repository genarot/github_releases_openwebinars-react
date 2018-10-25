import React from 'react';
import { shallow, configure} from 'enzyme';
import {expect} from 'chai';
import Header  from './Header';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe( 'Header', () => {
    it ( 'Should render the header of the page', () =>{
        const header = shallow(<Header />);

        expect( header.text() ).to.equal('Github Releases');
    })
})