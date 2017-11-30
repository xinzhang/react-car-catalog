import React from 'react';
import { shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {HomePage} from '../HomePage';

describe('<HomePage Component>', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
        <HomePage 
        />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
