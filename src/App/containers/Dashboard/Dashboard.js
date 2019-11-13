import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../../components/Header';
import { logout, getSignIn } from '../AuthPage/store';
import MapPage from '../MapPage';
import ProfilePage from '../ProfilePage';
import { fetchCardRequest } from '../ProfilePage/store';
import { fetchAddressListRequest } from '../AddressesForm/store';

const mapStateToProps = state => ({
  signIn: getSignIn(state),
});

class Dashboard extends Component {
  componentDidMount() {
    const { signIn: { token }, fetchCardRequest, fetchAddressListRequest } = this.props;

    fetchCardRequest(token);
    fetchAddressListRequest();
  }

  onLogout = event => {
    event.preventDefault();

    const { logout } = this.props
  
    logout();
  }

  render() {
    const { match } = this.props;
    return (
      <div data-testid="dashboard">
        <Header onLogout={this.onLogout} />
        <Switch>
          <Route path={`${match.path}/map`} component={MapPage} />
          <Route path={`${match.path}/profile`} component={ProfilePage} />
          <Redirect to={`${match.path}/map`} />
        </Switch>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { logout, fetchCardRequest, fetchAddressListRequest })(Dashboard);
