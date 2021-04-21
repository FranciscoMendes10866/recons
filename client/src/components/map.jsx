import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'

const Map = ({ position, show }) => {
  const Icon = L.icon({
    iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
    iconSize: [50, 55],
    iconAnchor: [25, 55],
    popupAnchor: [0, -55]
  })
  return (
    <MapContainer
      center={[position.lat, position.lng]}
      zoom={3}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {show ? (
        <Marker position={[position.lat, position.lng]} icon={Icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      ) : null}
    </MapContainer>
  );
};

export default Map;
