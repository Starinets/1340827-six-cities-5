import React from 'react';

import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {
  START_MAP_POSITION,
  START_MAP_ZOOM,
  MAP_LAYER,
  MAP_ATTRIBUTION,
  Icon
} from './../../constants';

class Map extends React.PureComponent {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
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
  }

  render() {
    return (
      <section className="cities__map map" id="map"></section>
    );
  }
};

export default Map;
