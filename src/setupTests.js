// fix TypeError: window.URL.createObjectURL is not a function
// https://github.com/mapbox/mapbox-gl-js/issues/3436
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  GeolocateControl: jest.fn(),
  Map: jest.fn(() => ({
    addControl: jest.fn(),
    on: jest.fn(),
    remove: jest.fn()
  })),
  NavigationControl: jest.fn()
}));

export default undefined;
