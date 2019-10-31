import React, { Component } from 'react';
import Map from '../Map';

class MapPage extends Component {
  render() {
    return (
      <div data-testid="map-page">
        <Map />
      </div>
    );
  }
}

export default MapPage;
