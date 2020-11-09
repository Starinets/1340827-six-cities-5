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
    this.mapPlace = props.mapPlace;

    this.markers = [];
    this.map = undefined;
    this.icon = undefined;
  }

  componentDidMount() {

    this.icon = Leaflet.icon(Icon);

    this.map = Leaflet.map(`map`, {
      center: START_MAP_POSITION,
      zoom: START_MAP_ZOOM,
      zoomControl: false,
      marker: true
    });

    this.map.setView(START_MAP_POSITION, START_MAP_ZOOM);

    Leaflet.tileLayer(MAP_LAYER,
        {
          attribution: MAP_ATTRIBUTION
        }).addTo(this.map);

    this.offers.forEach(({latitude, longitude}) => {
      const offerCords = [latitude, longitude];
      const marker = Leaflet.marker(offerCords, {icon: this.icon});

      marker.addTo(this.map);
      this.markers.push(marker);
    });
  }

  componentWillUpdate(props) {
    this.markers.forEach((marker) => {
      this.map.removeLayer(marker);
    });

    this.markers = [];
    this.offers = props.offers;
    this.offers.forEach(({latitude, longitude}) => {
      const offerCords = [latitude, longitude];
      const marker = Leaflet.marker(offerCords, {icon: this.icon});

      marker.addTo(this.map);
      this.markers.push(marker);
    });
  }

  render() {
    return (
      <section className={ `${ this.mapPlace }__map map` } id="map"></section>
    );
  }
}

Map.propTypes = {
  offers: Type.OFFERS.isRequired,
  mapPlace: Type.MAP_PLACE.isRequired
};

export default Map;
