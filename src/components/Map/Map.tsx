import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import CSS from 'csstype';
 
mapboxgl.accessToken = 'pk.eyJ1IjoiaW5zNzciLCJhIjoiY2syMWpjMzhkMDExcTNtbXJ6MHBhemtlNCJ9.ABDFC7l53foY7ZvQimttaQ';

class Map extends Component {
  mapContainer: any;
  map: any;

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [37.621031, 55.753595],
      zoom: 12,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style: CSS.Properties = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%',
    };

    return <div style={style} ref={el => this.mapContainer = el} />;
  }
}

export default Map;
