import React from 'react';
import * as Type from '../../types';

import {Sorting as SortList} from '../../constants';

export default class Sorting extends React.PureComponent {

  constructor(props) {

    super(props);

    this.state = {
      isOpen: false,
    };

    this.handleListNameClick = this.handleListNameClick.bind(this);
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  handleListNameClick() {
    this.setState(() => ({isOpen: !this.state.isOpen}));
  }

  handleListItemClick(onSortingClick, sorting) {
    onSortingClick(sorting);
    this.setState(() => ({isOpen: false}));
  }

  render() {

    const {currentSorting, onSortingClick} = this.props;
    const {isOpen} = this.state;
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
          onClick={() => this.handleListNameClick()}
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
                  onClick={() => this.handleListItemClick(onSortingClick, sorting)}
                >
                  {sorting}
                </li>
              );
            })
          }
        </ul>
      </form>
    );
  }
}

Sorting.propTypes = {
  currentSorting: Type.SORTING.isRequired,
  onSortingClick: Type.FUNCTION.isRequired,
};
