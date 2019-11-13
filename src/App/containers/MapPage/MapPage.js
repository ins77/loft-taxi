import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Typography, Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Map from '../../components/Map';
import AddressesForm from '../AddressesForm';
import PaperBox from '../../components/PaperBox';
import { getProfile } from '../ProfilePage/store';
import Spinner from '../../components/Spinner';

const mapStateToProps = state => ({
  profile: getProfile(state),
});

class MapPage extends Component {
  render() {
    const { profile: { card, isLoading } } = this.props;
    const isFormShown = !!card || isLoading;
    const isMessageShown = !card && !isLoading;

    return (
      <div data-testid="map-page">
        <Map />
        <PaperBox width={650}>
          {isFormShown && <AddressesForm/>}

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

          <Spinner show={isLoading} />
        </PaperBox>
      </div>
    );
  }
}

export default connect(mapStateToProps)(MapPage);
