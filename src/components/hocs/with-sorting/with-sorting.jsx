import React from "react";

const withSorting = (Component) => {

  class WithSorting extends React.PureComponent {

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
      const {isOpen} = this.state;
      return (
        <Component
          {...this.props}
          isOpen={isOpen}
          onListItemClick={this.handleListItemClick}
          onListNameClick={this.handleListNameClick}
        />
      );
    }
  }
  return WithSorting;
};

export default withSorting;
