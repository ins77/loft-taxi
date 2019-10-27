import React, { Component } from 'react';

import Header from './Header';
import MapPage from './MapPage';
import ProfilePage from './ProfilePage';

type Props = {
  onSignOut(): void;
};

type State = {
  showMapPage: boolean;
  showProfilePage: boolean;
};

type RoutesMap = {
  [propName: string]: State;
};

const routesMap: RoutesMap = {
  map:     { showMapPage: true, showProfilePage: false },
  profile: { showMapPage: false, showProfilePage: true },
}

class Layout extends Component<Props, State> {
  state: State = {
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
