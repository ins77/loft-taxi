import React, { Component } from 'react';
import { Typography, Box, TextField, Button, Link } from '@material-ui/core';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signInRequest, getSignIn } from '../../store/signIn';
import AuthPage from '../AuthPage';

const mapStateToProps = state => ({
  signIn: getSignIn(state),
});

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  onSignInSubmit = event => {
    event.preventDefault();

    const { signInRequest } = this.props;

    signInRequest(this.state);
  }

  render() {
    const { signIn: { isLoading, isAuthenticated  } } = this.props;
    const { email, password } = this.state;

    if (isAuthenticated) {
      return <Redirect to="/map" />;
    }

    return (
      <AuthPage>
        <Typography variant="h5" component="h3">Войти</Typography>
        <Box mt={1}>
          <Typography variant="body1">
            {'Новый пользователь? '}
            <Link component={RouterLink} to="/signup">
              Зарегистрируйтесь
            </Link>
          </Typography>
        </Box>
        <form noValidate onSubmit={this.onSignInSubmit} data-testid="signin-form">
          <TextField
            name="email"
            fullWidth
            error
            margin="normal"
            label="Email"
            required
            helperText="Ошибка"
            value={email}
            onChange={this.handleInputChange}
          />
          <TextField
            name="password"
            fullWidth
            error
            margin="normal"
            label="Пароль"
            required
            helperText="Ошибка"
            type="password"
            value={password}
            onChange={this.handleInputChange}
          />
          <Box mt={3} display="flex" justifyContent="flex-end">
            <Button variant="contained" type="submit" disabled={isLoading}>Войти</Button>
          </Box>
        </form>
      </AuthPage>
    );
  }
}

SignIn.propTypes = {
  signIn: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    token: PropTypes.string,
  }).isRequired,
  history: PropTypes.object.isRequired,
  signInRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { signInRequest })(SignIn);
