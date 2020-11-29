import React, {useState, useCallback} from 'react';
import * as Type from '../../types';

const withSorting = (Component) => {
  const WithSorting = (props) => {

    const {onSortingClick} = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleListNameClick = useCallback(() => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    });

    const handleListItemClick = useCallback((filterItem) => {
      onSortingClick(filterItem);
      setIsOpen(() => false);
    });

    return (
      <Component
        { ...props }
        isOpen={ isOpen }
        onListItemClick={ handleListItemClick }
        onListNameClick={ handleListNameClick }
      />
    );
  };

  WithSorting.propTypes = {
    onSortingClick: Type.FUNCTION.isRequired
  };

  return WithSorting;
};

export default withSorting;
