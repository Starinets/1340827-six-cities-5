import React from 'react';
import * as Type from '../../types';

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

    this.offers = props.offers;
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

    this.offers.forEach(({latitude, longitude}) => {
      const offerCords = [latitude, longitude];
      Leaflet.marker(offerCords, {icon}).addTo(map);
    });
  }

  render() {
    return (
      <section className="cities__map map" id="map"></section>
    );
  }
}

Map.propTypes = {
  offers: Type.OFFERS.isRequired,
};

export default Map;
