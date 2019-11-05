import React, { Component } from 'react';

import withLayout from '../../hoc/withLayout/withLayout';

class ProfilePage extends Component {
  render() {
    return <div data-testid="profile-page">Profile Page</div>;
  }
}

export default withLayout(ProfilePage);