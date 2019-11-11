import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from '../../components/Map';
import withLayout from '../../hoc/withLayout/withLayout';
import TaxiCallForm from '../../components/TaxiCallForm';
import { fetchAddressListRequest, getAddressList } from './store/addressList';

const mapDispatchToProps = state => ({
  addressList: getAddressList(state),
});

class MapPage extends Component {
  componentDidMount() {
    this.props.fetchAddressListRequest();
  }

  render() {
    const { addressList: { addresses, isLoading } } = this.props;

    return (
      <div data-testid="map-page">
        <Map />
        <TaxiCallForm
          addresses={addresses}
          isLoading={isLoading}
        />
      </div>
    );
  }
}

export default connect(mapDispatchToProps, { fetchAddressListRequest })(withLayout(MapPage));
