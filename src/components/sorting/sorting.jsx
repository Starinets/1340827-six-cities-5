import React from 'react';
import * as Type from '../../types';

import {SortList} from '../../constants';

const Sorting = (props) => {

  const {
    currentSorting,
    isOpen,
    onListItemClick,
    onListNameClick
  } = props;
  const sortList = Object.values(SortList);

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
    >
      <span className="places__sorting-caption">Sort by &nbsp;</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => onListNameClick()}
      >
        {currentSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
        {
          sortList.map((sorting) => {
            return (
              <li
                key={sorting}
                className={`places__option ${currentSorting === sorting ? `places__option--active` : ``}`}
                tabIndex="0"
                onClick={() => onListItemClick(sorting)}
              >
                {sorting}
              </li>
            );
          })
        }
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  currentSorting: Type.SORTING.isRequired,
  isOpen: Type.BOOLEAN.isRequired,
  onListItemClick: Type.FUNCTION.isRequired,
  onListNameClick: Type.FUNCTION.isRequired,
};

export default Sorting;
