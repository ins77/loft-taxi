import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from '../../components/Map';
import withLayout from '../../hoc/withLayout/withLayout';
import TaxiCallForm from '../../components/TaxiCallForm';
import { fetchAddressListRequest, getAddressList } from '../../store/addressList';

const mapDispatchToProps = state => ({
  addressList: getAddressList(state),
});

class MapPage extends Component {
  state = {
    addressFrom: '',
    addressTo: '',
  }

  componentDidMount() {
    this.props.fetchAddressListRequest();
  }

  onChangeInputFrom = value => {
    this.setState({ addressFrom: value });
  }

  onChangeInputTo = value => {
    this.setState({ addressTo: value });
  }

  onSubmit = event => {
    event.preventDefault();
  }

  render() {
    const { addressList: { addresses, isLoading } } = this.props;
    const { addressFrom, addressTo } = this.state;

    return (
      <div data-testid="map-page">
        <Map />
        <TaxiCallForm
          addresses={addresses}
          isLoading={isLoading}
          onChangeInputFrom={this.onChangeInputFrom}
          onChangeInputTo={this.onChangeInputTo}
          addressFrom={addressFrom}
          addressTo={addressTo}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default connect(mapDispatchToProps, { fetchAddressListRequest })(withLayout(MapPage));
