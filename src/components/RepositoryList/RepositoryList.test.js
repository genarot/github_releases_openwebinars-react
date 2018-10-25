import React from 'react';
import { shallow, configure} from 'enzyme';
import {expect} from 'chai';
import RepositoryList  from './RepositoryList';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe( 'RepositoryList', () => {
    it ( 'Should render a loading message', () =>{
        const repositoryList = shallow(<RepositoryList.WrappedComponent data={[]} total={0} loading={true} queried={false} search={'test'} />);

        //depurar test
        console.log(repositoryList.debug());
        

        expect( repositoryList.find('HintMessage').length).to.equal(1);
    })
})