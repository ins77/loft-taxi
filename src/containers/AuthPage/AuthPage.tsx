import React, { Component } from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';

import Logo from '../../components/Logo';
import AuthFormWrapper from '../../components/AuthFormWrapper/AuthFormWrapper';
interface AuthPageProps extends RouteComponentProps {
  classes: {
    wrap: string;
    grid: string;
  };
}
interface AuthPageState {
  showSignIn: boolean;
  showSignUp: boolean;
};

const styles = {
  grid: {
    height: '100%',
  },
};
class AuthPage extends Component<any, any> {
  render() {
    const { classes, children } = this.props;

    return (
      <Box display="flex" height="100%">
        <Container maxWidth="md">
          <Grid container className={classes.grid} alignItems="center">
            <Grid item xs={6}>
              <Box display="flex" justifyContent="center">
                <Logo variant="light" />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <AuthFormWrapper>
                {children}
              </AuthFormWrapper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default withStyles(styles)(AuthPage);
