import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@material-ui/core';

import Logo from './Logo';

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Logo />
        <Box ml="auto">
          <Button>Карта</Button>
          <Button>Профиль</Button>
          <Button>Выйти</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

