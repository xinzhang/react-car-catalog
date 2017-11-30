import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {CarDetail} from '../CarDetail';

describe('<Car Detail Component>', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
        <CarDetail 
          car={{
              name: 'car',
              price: 2000.00,
              maker: 'suzuki',
              imageUrl: '/abc/bde.jpg'
          }}             
        />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
