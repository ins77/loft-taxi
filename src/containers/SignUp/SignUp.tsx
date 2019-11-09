import React, { Component } from 'react';
import { Typography, Box, TextField, Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getSignUp, signUpRequest } from '../../redux/signUp';
import { createSignUpData } from '../../redux/signUpForm';
import AuthPage from '../AuthPage';

const mapStateToProps = (state: any) => ({
  signUp: getSignUp(state),
});

class SignUp extends Component<any, any> {
  state = {
    email: '',
    name: '',
    surname: '',
    password: '',
  }

  componentDidUpdate(prevProps: any) {
    const { signUp: { token }, history } = this.props;

    if (token && token !== prevProps.signUp.token) {
      history.push('/signin');
    }
  }

  handleInputChange = (event: React.SyntheticEvent) => {
    const { name, value } = (event.target as HTMLInputElement);

    this.setState({ [name]: value });
  }

  onSignUpSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const { createSignUpData, signUpRequest } = this.props;

    createSignUpData({ ...this.state });
    signUpRequest();
  }

  render() {
    const { signUp: { isLoading } } = this.props;
    const { email, name, surname, password } = this.state;

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
        <form noValidate onSubmit={this.onSignUpSubmit} data-testid="signup-form">
          <TextField 
            fullWidth
            error
            margin="normal"
            label="Адрес электронной почты"
            required
            helperText="Ошибка"
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                error
                margin="normal"
                label="Имя"
                required
                helperText="Ошибка"
                name="name"
                value={name}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                error
                margin="normal"
                label="Фамилия"
                required
                helperText="Ошибка"
                name="surname"
                value={surname}
                onChange={this.handleInputChange}
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            error
            margin="normal"
            label="Пароль"
            required
            helperText="Ошибка"
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
          <Box mt={3} display="flex" justifyContent="flex-end">
            <Button variant="contained" type="submit" disabled={isLoading}>Зарегистрироваться</Button>
          </Box>
        </form>
      </AuthPage>
    );
  }
}

export default connect(mapStateToProps, { signUpRequest, createSignUpData })(SignUp);
