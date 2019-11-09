import React, { Component } from 'react';
import { Typography, Box, TextField, Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actionCreators from '../../redux/actions';
import AuthPage from '../AuthPage';

const mapDispatchToProps = (state: any) => ({
  signUp: state.signUp,
});

class SignUp extends Component<any, any> {
  componentDidUpdate(prevProps: any) {
    const { signUp: { token }, history } = this.props;

    if (token && token !== prevProps.signUp.token) {
      history.push('/signin');
    }
  }

  onSignUpSubmit = (event: React.SyntheticEvent, target: any) => {
    event.preventDefault();

    const { createSignUpData, signUpRequest } = this.props;
    const { email, password, name, surname } = target;

    createSignUpData({
      email: email.value,
      password: password.value,
      name: name.value,
      surname: surname.value,
    });
    signUpRequest();
  }

  render() {
    const { signUp: { isLoading } } = this.props;

    return (
      <AuthPage>
        <Typography variant="h5" component="h3">Регистрация</Typography>
        <Box mt={1}>
          <Typography variant="body1">
            {'Уже зарегистрирован? '}
              <Link to="/signin">
                Войти
              </Link>
          </Typography>
        </Box>
        <form noValidate onSubmit={(event) => this.onSignUpSubmit(event, event.target)} data-testid="signup-form">
          <TextField fullWidth error margin="normal" label="Адрес электронной почты" required helperText="Ошибка" type="email" name="email" />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth error margin="normal" label="Имя" required helperText="Ошибка" name="name" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth error margin="normal" label="Фамилия" required helperText="Ошибка" name="surname" />
            </Grid>
          </Grid>
          <TextField fullWidth error margin="normal" label="Пароль" required helperText="Ошибка" type="password" name="password" />
          <Box mt={3} display="flex" justifyContent="flex-end">
            <Button variant="contained" type="submit" disabled={isLoading}>Зарегистрироваться</Button>
          </Box>
        </form>
      </AuthPage>
    );
  }
}

export default connect(mapDispatchToProps, actionCreators)(SignUp);
