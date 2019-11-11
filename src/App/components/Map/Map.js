import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

class Map extends Component {
  mapContainer;
  map;

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaW5zNzciLCJhIjoiY2syMWpjMzhkMDExcTNtbXJ6MHBhemtlNCJ9.ABDFC7l53foY7ZvQimttaQ';

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.2656504, 59.8029126],
      zoom: 15,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%',
    };

    return <div data-testid="mapbox"
                style={style}
                ref={el => this.mapContainer = el} />;
  }
}

export default Map;
