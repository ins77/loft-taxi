import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// fix TypeError: window.URL.createObjectURL is not a function
// https://github.com/mapbox/mapbox-gl-js/issues/3436
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({}),
}));

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(React.createElement(App), div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

