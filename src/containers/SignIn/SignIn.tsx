import React, { Component } from 'react';
import { Typography, Box, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionCreators from '../../redux/actions';
import AuthPage from '../AuthPage';

const mapStateToProps = (state: any) => ({
  signIn: state.signIn,
});

class SignIn extends Component<any, any> {
  componentDidUpdate() {
    const { signIn: { isAuthenticated }, history } = this.props;

    if (isAuthenticated) {
      history.push('/map');
    }
  }

  onSignInSubmit = (event: React.SyntheticEvent, target: any) => {
    event.preventDefault();

    const { createSignInData, signInRequest } = this.props;
    const { email, password } = target;

    createSignInData({ email: email.value, password: password.value });
    signInRequest();
  }

  render() {
    const { signIn: { isLoading } } = this.props;

    return (
      <AuthPage>
        <Typography variant="h5" component="h3">Войти</Typography>
        <Box mt={1}>
          <Typography variant="body1">
            {'Новый пользователь? '}
            <Link to="/signup">
              Зарегистрируйтесь
            </Link>
          </Typography>
        </Box>
        <form noValidate onSubmit={(event) => this.onSignInSubmit(event, event.target)} data-testid="signin-form">
          <TextField name="email" fullWidth error margin="normal" label="Email" required helperText="Ошибка" />
          <TextField name="password" fullWidth error margin="normal" label="Пароль" required helperText="Ошибка" type="password" />
          <Box mt={3} display="flex" justifyContent="flex-end">
            <Button variant="contained" type="submit" disabled={isLoading}>Войти</Button>
          </Box>
        </form>
      </AuthPage>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(SignIn);
