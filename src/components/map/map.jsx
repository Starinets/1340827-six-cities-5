import React from 'react';
import * as Type from '../../types';

import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {
  START_MAP_POSITION,
  START_MAP_ZOOM,
  MAP_LAYER,
  MAP_ATTRIBUTION,
  Icon,
  ActiveIcon
} from '../../constants';

class Map extends React.PureComponent {

  constructor(props) {
    super(props);

    this.offers = props.offers;
    this.hoveredOffer = props.hoveredOffer;
    this.mapPlace = props.mapPlace;

    this.markers = [];
    this.map = undefined;
  }

  _renderMarkers() {

    const icon = Leaflet.icon(Icon);
    const activeIcon = Leaflet.icon(ActiveIcon);

    this.offers.forEach((offer) => {

      const offerCords = [offer.latitude, offer.longitude];
      const currentIcon = offer === this.hoveredOffer ? activeIcon : icon;
      const marker = Leaflet.marker(offerCords, {icon: currentIcon});

      marker.addTo(this.map);
      this.markers.push(marker);
    });
  }

  componentDidMount() {

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

    this._renderMarkers();
  }

  componentWillUpdate(props) {

    this.markers.forEach((marker) => {
      this.map.removeLayer(marker);
    });

    this.markers = [];
    this.offers = props.offers;
    this.hoveredOffer = props.hoveredOffer;
    this._renderMarkers();
  }

  render() {
    return (
      <section className={ `${ this.mapPlace }__map map` } id="map"></section>
    );
  }
}

Map.propTypes = {
  offers: Type.OFFERS.isRequired,
  mapPlace: Type.MAP_PLACE.isRequired,
  hoveredOffer: Type.OFFER
};

export default Map;
