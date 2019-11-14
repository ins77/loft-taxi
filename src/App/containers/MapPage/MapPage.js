import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Typography, Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import AddressesForm from '../../components/AddressesForm';
import Map from '../Map';
import PaperBox from '../../shared/PaperBox';
import Spinner from '../../shared/Spinner';
import { getProfile } from '../ProfilePage/store';
import { getAddresses, fetchRoutesRequest, initMap, getRoutes } from './store';

const mapStateToProps = state => ({
  profile: getProfile(state),
  addresses: getAddresses(state),
  routes: getRoutes(state),
});

class MapPage extends Component {
  componentDidMount() {
    this.props.initMap();
  }

  handleSubmitAddresses = values => {
    const { addressFrom, addressTo } = values;

    this.props.fetchRoutesRequest({ addressFrom, addressTo });
  }

  orderAgain = () => {
    this.props.initMap();
  }

  render() {
    const { profile, addresses: addressesList, routes: { submitted } } = this.props;
    const { card, isLoading: isProfileLoading } = profile;
    const { addresses, isLoading: isAddressesLoading } = addressesList;
    const isFormShown = !submitted && (!!card || isProfileLoading);
    const isProfileMessageShown = !card && !isProfileLoading && !submitted;

    return (
      <div data-testid="map-page">
        <Map />
        <PaperBox width={650}>
          {isFormShown && (
            <AddressesForm
              addresses={addresses}
              handleSubmitAddresses={this.handleSubmitAddresses}
            />
          )}

          {isProfileMessageShown && (
            <Fragment>
              <Box mb={4}>
                <Typography variant="h4">
                  Заполните платежные данные
                </Typography>
              </Box>
              <Box mb={4}>
                <Typography variant="body1">
                  Укажите информацию о банковской карте, чтобы сделать заказ.
                </Typography>
              </Box>
              <Button variant="contained" to="/dashboard/profile" component={Link} fullWidth>
                Перейти в профиль
              </Button>
            </Fragment>
          )}

          {submitted && (
            <Fragment>
              <Box mb={4}>
                <Typography variant="h4">
                  Спасибо за заказ, такси скоро приедет!
                </Typography>
              </Box>
              <Button variant="contained" fullWidth onClick={this.orderAgain}>
                Заказать снова
              </Button>
            </Fragment>
          )}

          <Spinner show={isProfileLoading || isAddressesLoading} />
        </PaperBox>
      </div>
    );
  }
}

export default connect(mapStateToProps, { fetchRoutesRequest, initMap })(MapPage);
