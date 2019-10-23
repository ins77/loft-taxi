import React, { Component } from 'react';
import { Container, Grid, Box } from '@material-ui/core';

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
  render() {
    return (
      <Box display="flex" height="100%" style={styles.wrap}>
        <Container maxWidth="md">
          <Grid container style={styles.grid} alignItems="center">
            <Grid item xs={6}>
              <Box display="flex" justifyContent="center">
                <Logo variant="light" />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <SignIn />
              <SignUp />
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default AuthPage;
