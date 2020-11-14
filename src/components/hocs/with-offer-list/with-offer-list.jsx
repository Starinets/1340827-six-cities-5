import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../../store/action";

const withOfferList = (Component) => {

  class WithOfferList extends React.PureComponent {

    render() {
      return (
        <Component
          {...this.props}
        />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    changeHoveredOffer(hoveredOffer) {
      dispatch(ActionCreator.setHoveredOffer(hoveredOffer));
    }
  });

  return connect(null, mapDispatchToProps)(WithOfferList);
};

export default withOfferList;
