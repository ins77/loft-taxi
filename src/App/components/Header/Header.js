import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, withRouter } from 'react-router-dom';

import Logo from '../Logo';

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing(2),
  },
}));

const Header = ({ onLogout, match }) => {
  const classes = useStyles();

  return (
    <AppBar position="relative" data-testid="header-app-bar">
      <Toolbar>
        <Logo />
        <Box ml="auto">
          <Button className={classes.button} component={NavLink} to={`${match.url}/map`}>
            Карта
          </Button>
          <Button className={classes.button} component={NavLink} to={`${match.url}/profile`}>
            Профиль
          </Button>
          <Button className={classes.button}
                  data-testid="button-logout"
                  onClick={onLogout}>
            Выйти
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default withRouter(Header);

