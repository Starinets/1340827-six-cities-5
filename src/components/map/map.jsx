import React from 'react';
import * as Type from '../../types';
import {connect} from 'react-redux';
import {getHoveredOfferSelector} from '../../store/selectors';

import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {
  MAP_LAYER,
  MAP_ATTRIBUTION,
  Icon,
  ActiveIcon
} from '../../constants';

class Map extends React.PureComponent {

  constructor(props) {
    super(props);

    this.markers = [];
    this.map = undefined;
  }

  _renderMarkers(offers, hoveredOffer) {
    const icon = Leaflet.icon(Icon);
    const activeIcon = Leaflet.icon(ActiveIcon);

    offers.forEach((offer) => {
      const offerCords = [offer.location.latitude, offer.location.longitude];
      const currentIcon = offer === hoveredOffer ? activeIcon : icon;
      const marker = Leaflet.marker(offerCords, {icon: currentIcon});

      marker.addTo(this.map);
      this.markers.push(marker);
    });
  }

  _setCityLocation(offers) {
    if (offers.length > 0) {
      const {location} = offers[0].city;
      this.map.setView([location.latitude, location.longitude], location.zoom);
    }
  }

  componentDidMount() {
    const {offers} = this.props;
    this.map = Leaflet.map(`map`, {
      zoomControl: false,
      marker: true
    });

    this._setCityLocation(offers);

    Leaflet.tileLayer(MAP_LAYER,
        {
          attribution: MAP_ATTRIBUTION
        }).addTo(this.map);

    this._renderMarkers(offers, undefined);
  }

  componentWillUpdate(props) {
    const {offers, hoveredOffer} = props;

    this._setCityLocation(offers);

    this.markers.forEach((marker) => {
      this.map.removeLayer(marker);
    });

    this.markers = [];
    this._renderMarkers(offers, hoveredOffer);
  }

  render() {

    const {mapPlace} = this.props;

    return (
      <section className={ `${ mapPlace }__map map` } id="map"></section>
    );
  }
}

Map.propTypes = {
  offers: Type.OFFERS.isRequired,
  mapPlace: Type.MAP_PLACE.isRequired,
  hoveredOffer: Type.OFFER
};

const mapStateToProps = (state) => ({
  hoveredOffer: getHoveredOfferSelector(state)
});

export {Map};
export default connect(mapStateToProps)(Map);
