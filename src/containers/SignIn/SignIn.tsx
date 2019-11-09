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
  state = {
    email: '',
    password: '',
  }

  componentDidUpdate(prevProps: any) {
    const { signIn: { isAuthenticated, token }, history } = this.props;
    const hasNewToken = token !== prevProps.signIn.token;
    
    if (isAuthenticated && hasNewToken) {
      history.push('/map');
    }
  }

  handleInputChange = (event: React.SyntheticEvent) => {
    const { name, value } = (event.target as HTMLInputElement);

    this.setState({ [name]: value });
  }

  onSignInSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const { createSignInData, signInRequest } = this.props;

    createSignInData({ ...this.state });
    signInRequest();
  }

  render() {
    const { signIn: { isLoading } } = this.props;
    const { email, password } = this.state;

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

export default connect(mapStateToProps, actionCreators)(SignIn);
