import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Logo from './Logo';

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing(2),
  },
}));

const navLinks = [
  { id: 0, label: 'Карта', route: 'map' },
  { id: 1, label: 'Профиль', route: 'profile' },
  { id: 2, label: 'Выйти', route: 'signOut' },
];

const Header = ({ onChangePage }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Logo />
        <Box ml="auto">
          {navLinks.map(({ id, label, route }) => (
            <Button key={id} className={classes.button} onClick={onChangePage(route)}>
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

