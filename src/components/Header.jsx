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
  { id: 0, label: 'Карта' },
  { id: 1, label: 'Профиль' },
  { id: 2, label: 'Выйти' },
];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Logo />
        <Box ml="auto">
          {navLinks.map(({ id, label }) => (
            <Button key={id} className={classes.button}>
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

