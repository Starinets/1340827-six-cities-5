import React, {useState, useCallback} from 'react';
import {connect} from 'react-redux';
import * as Type from '../../types';

import {setCurrentCity} from '../../store/action';
import {login} from '../../store/api-actions';

const withLogin = (Component) => {
  const WithLogin = (props) => {

    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);

    const {onItemClick} = props;

    const handleEmailChange = useCallback((evt) => {
      setEmail(evt.target.value);
    });

    const handlePasswordChange = useCallback((evt) => {
      setPassword(evt.target.value);
    });

    const handleFormSubmit = useCallback((evt) => {
      const {onFormSubmit} = props;

      evt.preventDefault();

      onFormSubmit({login: email, password});
    });

    return (
      <Component
        email={ email }
        password={ password }
        onEmailChange={ handleEmailChange }
        onPasswordChange={ handlePasswordChange }
        onFormSubmit={ handleFormSubmit }
        onCityClick={ onItemClick }
      />
    );
  };

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
