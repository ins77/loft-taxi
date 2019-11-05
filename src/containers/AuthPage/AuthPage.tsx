import React, { Component } from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';

import bg from '../../assets/images/bg.jpg';
import Logo from '../../components/Logo';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import { AuthContext } from '../../components/AuthContext';

interface AuthPageProps {
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
  wrap: {
    background: `url(${bg}) 0 0 no-repeat`,
  },
  grid: {
    height: '100%',
  },
};

class AuthPage extends Component<AuthPageProps & RouteComponentProps, AuthPageState> {
  static contextType = AuthContext;

  state: AuthPageState = {
    showSignIn: true,
    showSignUp: false,
  }

  onChangeToSignUp = (event: React.SyntheticEvent) => {
    event.preventDefault();

    this.setState({ showSignIn: false, showSignUp: true });
  }

  onChangeToSignIn = (event: React.SyntheticEvent) => {
    event.preventDefault();

    this.setState({ showSignIn: true, showSignUp: false });
  }

  onAuthSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    this.context.login();
    this.props.history.push('/map');
  }

  render() {
    const { classes } = this.props;
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
              {showSignIn &&
                <SignIn onSignInSubmit={this.onAuthSubmit} 
                        onChangeToSignUp={this.onChangeToSignUp} />
              }
              {showSignUp &&
                <SignUp onSignUpSubmit={this.onAuthSubmit}
                        onChangeToSignIn={this.onChangeToSignIn} />
              }
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default withStyles(styles)(AuthPage);
