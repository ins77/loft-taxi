import React, { Component } from 'react';

import Map from '../../components/Map';
import withLayout from '../../hoc/withLayout/withLayout';
import TaxiCallForm from '../TaxiCallForm';

class MapPage extends Component {
  render() {
    return (
      <div data-testid="map-page">
        <Map />
        <TaxiCallForm/>
      </div>
    );
  }
}

export default withLayout(MapPage);
