import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import {
  Map, Marker, TileLayer
} from 'react-leaflet';

import L from 'leaflet';

import { MapBody } from './map.styles';

import 'leaflet/dist/leaflet.css';


import 'leaflet/dist/leaflet.css';


import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function MapContainer({ mapPosition }) {
  const zoom = 13;
  const mapRef = useRef(null);
  return (
    <MapBody>
      <Map
        ref={mapRef}
        center={mapPosition}
        zoom={zoom}
        attributionControl
        zoomControl
        doubleClickZoom
        scrollWheelZoom
        dragging
        animate
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={mapPosition} />
      </Map>
    </MapBody>
  );
}

MapContainer.propTypes = {
  dataTestPrefix: PropTypes.string,
  name: PropTypes.string,
  validation: PropTypes.string,
  defaultPosition: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  })
};

MapContainer.defaultProps = {
  dataTestPrefix: 'map',
  name: 'maps',
  validation: null,
  defaultPosition: null
};

export default MapContainer;
