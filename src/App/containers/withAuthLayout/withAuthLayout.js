import React, { Component } from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Logo from '../../shared/Logo';
import PaperBox from '../../shared/PaperBox/PaperBox';
import Spinner from '../../shared/Spinner';
import { getSignIn, getSignUp, signInRequest, signUpRequest, initSignUp } from './store';

const styles = {
  grid: {
    height: '100%',
  },
};

const mapStateToProps = state => ({
  signIn: getSignIn(state),
  signUp: getSignUp(state),
});

const withAuthLayout = WrappedComponent => {
  class AuthLayoutHOC extends Component {
    componentDidMount() {
      const { signUp: { submitted }, initSignUp } = this.props;

      if (submitted) {
        initSignUp();
      }
    }

    handleSubmitSignIn = values => {
      this.props.signInRequest(values);
    }

    handleSubmitSignUp = values => {
      this.props.signUpRequest(values);
    }

    render() {
      const { classes, signIn, signUp } = this.props;
      const { isAuthenticated, isLoading: signInIsLoading, error: signInError } = signIn;
      const { isLoading: signUpIsLoading, error: signUpError, submitted } = signUp;

      if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
      }

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
                <PaperBox width={500}>
                  <WrappedComponent 
                    handleSubmitSignIn={this.handleSubmitSignIn}
                    handleSubmitSignUp={this.handleSubmitSignUp}
                    signInError={signInError}
                    signUpError={signUpError}
                    isSignUpSubmitted={submitted}
                  />

                  <Spinner show={signInIsLoading || signUpIsLoading} />
                </PaperBox>
              </Grid>
            </Grid>
          </Container>
        </Box>
      );
    }
  };

  AuthLayoutHOC.propTypes = {
    classes: PropTypes.shape({
      grid: PropTypes.string.isRequired,
    }).isRequired,
    signIn: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
      isLoading: PropTypes.bool.isRequired,
      token: PropTypes.string,
    }).isRequired,
    signUp: PropTypes.shape({
      isLoading: PropTypes.bool.isRequired,
    }).isRequired,
    signInRequest: PropTypes.func.isRequired,
  };

  return connect(mapStateToProps, { signInRequest, signUpRequest, initSignUp })(withStyles(styles)(AuthLayoutHOC));
}

export default withAuthLayout;
