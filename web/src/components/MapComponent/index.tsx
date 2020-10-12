import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const MapComponent: React.FC = () => (
  <Map
    center={[-23.5307008, -46.4519168]}
    zoom={15}
    style={{ width: '100%', height: '100%' }}
  >
    {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
    <TileLayer
      url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
    />
  </Map>
);

export default MapComponent;
