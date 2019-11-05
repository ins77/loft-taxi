import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

import Logo from '../Logo';

interface HeaderProps {
  onLogout(event: React.SyntheticEvent): void; 
};

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
  },
}));

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  const classes = useStyles();

  return (
    <AppBar position="relative" data-testid="header-app-bar">
      <Toolbar>
        <Logo />
        <Box ml="auto">
          <NavLink to="/map" className={classes.link}>
            <Button className={classes.button}>
              Карта
            </Button>
          </NavLink>
          <NavLink to="/profile" className={classes.link}>
            <Button className={classes.button}>
              Профиль
            </Button>
          </NavLink>
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

