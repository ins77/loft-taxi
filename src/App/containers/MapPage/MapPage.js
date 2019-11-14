import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Typography, Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import AddressesForm from '../../components/AddressesForm';
import Map from '../../components/Map';
import PaperBox from '../../shared/PaperBox';
import Spinner from '../../shared/Spinner';
import { getProfile } from '../ProfilePage/store';
import { getAddresses, fetchRoutesRequest } from './store';

const mapStateToProps = state => ({
  profile: getProfile(state),
  addresses: getAddresses(state),
});

class MapPage extends Component {
  handleSubmitAddresses = values => {
    const { addressFrom, addressTo } = values;

    this.props.fetchRoutesRequest({ addressFrom, addressTo });
  }
ß
  render() {
    const { profile, addresses: addressesList } = this.props;
    const { card, isLoading: isProfileLoading } = profile;
    const { addresses, isLoading: isAddressesLoading } = addressesList;
    const isFormShown = !!card || isProfileLoading;
    const isMessageShown = !card && !isProfileLoading;

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

          {isMessageShown && (
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

          <Spinner show={isProfileLoading || isAddressesLoading} />
        </PaperBox>
      </div>
    );
  }
}

export default connect(mapStateToProps, { fetchRoutesRequest })(MapPage);
