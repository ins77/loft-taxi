import React, { Component } from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import bg from '../assets/images/bg.jpg';
import Logo from './Logo';
import SignIn from './SignIn';
import SignUp from './SignUp';

const styles = {
  wrap: {
    background: `url(${bg}) 0 0 no-repeat / cover`,
  },
  grid: {
    height: '100%',
  },
};

class AuthPage extends Component {
  state = {
    showSignIn: true,
    showSignUp: false,
  }

  onChangeToSignUp = event => {
    event.preventDefault();

    this.setState({ showSignIn: false, showSignUp: true });
  }

  onChangeToSignIn = event => {
    event.preventDefault();

    this.setState({ showSignIn: true, showSignUp: false });
  }

  render() {
    const { classes, onAuthSubmit } = this.props;
    const { showSignIn, showSignUp } = this.state;

    return (
      <Box display="flex" height="100%" className={classes.wrap}>
        <Container maxWidth="md">
          <Grid container className={classes.grid} alignItems="center">
            <Grid item xs={6}>
              <Box display="flex" justifyContent="center">
                <Logo variant="light" />
              </Box>
            </Grid>
            <Grid item xs={6}>
              {showSignIn && <SignIn onSignInSubmit={onAuthSubmit} onChangeToSignUp={this.onChangeToSignUp} />}
              {showSignUp && <SignUp onSignUpSubmit={onAuthSubmit} onChangeToSignIn={this.onChangeToSignIn} />}
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default withStyles(styles)(AuthPage);
