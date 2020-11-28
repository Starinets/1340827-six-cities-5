
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CityList from './city-list';

import {City} from '../../test-data/test-data';

configure({adapter: new Adapter()});

const Cities = Object.values(City);

it(`Another city must be chosen`, () => {
  const onCityClick = jest.fn();

  const wrapper = shallow(
      <CityList
        currentCity={ Cities[0] }
        onCityClick={ onCityClick }
      />
  );

  const links = wrapper.find(`.locations__item-link`);

  expect(links.length).toEqual(Cities.length);

  links.forEach((link) => {
    link.simulate(`click`);
  });

  expect(onCityClick).toHaveBeenCalledTimes(Cities.length);
});


