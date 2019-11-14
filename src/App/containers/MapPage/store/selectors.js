export const getMapbox = state => state.mapbox;
export const getRoutes = state => getMapbox(state).routes;
export const getAddresses = state => getMapbox(state).addresses;
