import React, { Component } from 'react';

import Header from './Header';
import MapPage from './MapPage';
import ProfilePage from './ProfilePage';

interface LayoutProps {
  onSignOut(): void;
};

interface LayoutState {
  showMapPage: boolean;
  showProfilePage: boolean;
};

interface RoutesMap {
  [propName: string]: LayoutState;
};

const routesMap: RoutesMap = {
  map:     { showMapPage: true, showProfilePage: false },
  profile: { showMapPage: false, showProfilePage: true },
};

class Layout extends Component<LayoutProps, LayoutState> {
  state: LayoutState = {
    showMapPage: true,
    showProfilePage: false,
  }

  onChangePage = (route: string) => (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (route === 'signOut') {
      this.props.onSignOut();

      return;
    };

    this.setState(routesMap[route]);
  }

  render() {
    const { showMapPage, showProfilePage } = this.state;

    return (
      <>
        <Header onChangePage={this.onChangePage} />
        {showMapPage && <MapPage />}
        {showProfilePage && <ProfilePage />}
      </>
    );
  }
}

export default Layout;
