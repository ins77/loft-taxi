import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

import Logo from '../Logo';

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing(2),
  },
}));

const Header = ({ onLogout }) => {
  const classes = useStyles();

  return (
    <AppBar position="relative" data-testid="header-app-bar">
      <Toolbar>
        <Logo />
        <Box ml="auto">
          <Button className={classes.button} component={NavLink} to="/map">
            Карта
          </Button>
          <Button className={classes.button} component={NavLink} to="/profile">
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

export default Header;

