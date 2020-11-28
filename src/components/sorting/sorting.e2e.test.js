import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Sorting from "./sorting";

import {
  emptyFunction,
  SortList
} from '../../test-data/test-data';

configure({adapter: new Adapter()});

describe(`Sorting behavior`, () => {
  it(`when new type selected`, () => {

    const onListItemClick = jest.fn();

    const wrapper = shallow(
        <Sorting
          currentSorting={ SortList.POPULAR }
          onSortingClick={ emptyFunction }
          isOpen={ true }
          onListItemClick={ onListItemClick }
          onListNameClick={ emptyFunction }
        />
    );

    const items = wrapper.find(`.places__option`);
    items.forEach((item) => {
      item.simulate(`click`);
    });

    expect(onListItemClick).toHaveBeenCalledTimes(items.length);

  });

  it(`when opening the list`, () => {

    const onListNameClick = jest.fn();

    const wrapper = shallow(
        <Sorting
          currentSorting={ SortList.POPULAR }
          onSortingClick={ emptyFunction }
          isOpen={ true }
          onListItemClick={ emptyFunction }
          onListNameClick={ onListNameClick }
        />
    );

    const items = wrapper.find(`.places__sorting-type`);
    items.simulate(`click`);

    expect(onListNameClick).toHaveBeenCalledTimes(1);

  });
});
