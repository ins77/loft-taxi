import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Logo from '../../components/Logo';
import PaperBox from '../../components/PaperBox/PaperBox';
import { getSignIn, getSignUp } from './store';
import Spinner from '../../components/Spinner';

const styles = {
  grid: {
    height: '100%',
  },
};

const mapStateToProps = state => ({
  signIn: getSignIn(state),
  signUp: getSignUp(state),
});

const AuthPage = props => {
  const { classes, children, signIn, signUp } = props;
  const { isAuthenticated, isLoading: signInIsLoading } = signIn;
  const { isLoading: signUpIsLoading } = signUp;

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
              {children}
              <Spinner show={signInIsLoading || signUpIsLoading} />
            </PaperBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

AuthPage.propTypes = {
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
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(AuthPage));
