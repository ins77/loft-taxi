import React, { Component } from 'react';

import Map from '../../components/Map';
import withLayout from '../../hoc/withLayout/withLayout';

class MapPage extends Component {
  render() {
    return (
      <div data-testid="map-page">
        <Map />
      </div>
    );
  }
}

export default withLayout(MapPage);
