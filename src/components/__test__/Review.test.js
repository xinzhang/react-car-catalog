import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {Review} from '../Review';

describe('<Review Component>', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
        <Review 
          review="abc def ghj"        
        />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
