import React, { Component, Fragment } from 'react';

import Header from '../Header';
import MapPage from '../MapPage';
import ProfilePage from '../ProfilePage';
import { AuthContext } from '../AuthContext';

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

class Layout extends Component<{}, LayoutState> {
  static contextType = AuthContext;

  state: LayoutState = {
    showMapPage: true,
    showProfilePage: false,
  }

  onChangePage = (event: React.SyntheticEvent, route: string) => {
    event.preventDefault();

    if (route === 'signOut') {
      this.context.logout();

      return;
    };

    this.setState(routesMap[route]);
  }

  render() {
    const { showMapPage, showProfilePage } = this.state;

    return (
      <Fragment>
        <Header onChangePage={this.onChangePage} />
        {showMapPage && <MapPage />}
        {showProfilePage && <ProfilePage />}
      </Fragment>
    );
  }
}

export default Layout;
