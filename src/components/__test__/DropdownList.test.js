import React from 'react';
import { shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {DropDownList} from '../ui/DropdownList';

describe('<DropdownList Component>', () => {
  it('matches snapshot', () => {
    const dataSource = [{id:1, name:'abc'}, {id:2, name:'def'}]
    const wrapper = shallow(
        <DropDownList 
            dataSource={dataSource} 
            size={300}
            name="ddList"
            value="id"
            text="name"        
            onchange={()=>{}}
        />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
