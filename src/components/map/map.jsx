import React from 'react';

import Leaflet from 'leaflet';
import {
  START_MAP_POSITION,
  START_MAP_ZOOM,
  MAP_LAYER,
  MAP_ATTRIBUTION,
  Icon
} from './../../constants';

const Map = () => {

  const icon = Leaflet.icon(Icon);

  const map = Leaflet.map(`map`, {
    center: START_MAP_POSITION,
    zoom: START_MAP_ZOOM,
    zoomControl: false,
    marker: true
  });

  map.setView(START_MAP_POSITION, START_MAP_ZOOM);

  Leaflet.tileLayer(MAP_LAYER,
      {
        attribution: MAP_ATTRIBUTION
      }).addTo(map);

  const offerCords = [52.3709553943508, 4.89309666406198];
  Leaflet.marker(offerCords, {icon}).addTo(map);

  return (
    <div id="map"></div>
  );
};

export default Map;
