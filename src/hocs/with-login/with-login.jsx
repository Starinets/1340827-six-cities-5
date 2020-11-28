import React from "react";
import {connect} from "react-redux";
import * as Type from "../../types";

import {setCurrentCity} from '../../store/action';
import {login} from "../../store/api-actions";

const withLogin = (Component) => {
  class WithLogin extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };

      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(evt) {
      this.setState({email: evt.target.value});
    }

    handlePasswordChange(evt) {
      this.setState({password: evt.target.value});
    }

    handleFormSubmit(evt) {
      const {onFormSubmit} = this.props;
      const {email, password} = this.state;
      evt.preventDefault();

      onFormSubmit({login: email, password});
    }

    render() {

      const {onItemClick} = this.props;

      return (
        <Component
          email={ this.state.email }
          password={ this.state.password }
          onEmailChange={ this.handleEmailChange }
          onPasswordChange={ this.handlePasswordChange }
          onFormSubmit={ this.handleFormSubmit }
          onCityClick={ onItemClick }
        />
      );
    }
  }

  WithLogin.propTypes = {
    onFormSubmit: Type.FUNCTION.isRequired,
    onItemClick: Type.FUNCTION.isRequired
  };

  const mapDispatchToProps = (dispatch) => ({
    onFormSubmit(authData) {
      dispatch(login(authData));
    },
    onItemClick(city) {
      dispatch(setCurrentCity(city));
    }
  });

  return connect(null, mapDispatchToProps)(WithLogin);
};

export default withLogin;
