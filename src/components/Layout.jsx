import React, { Component } from 'react';

import Header from './Header';
import MapPage from './MapPage';
import ProfilePage from './ProfilePage';

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <MapPage />
        <ProfilePage />
      </>
    );
  }
}

export default Layout;
