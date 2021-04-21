import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'

const Map = ({ position, show, markers }) => {
  const Icon = L.icon({
    iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
    iconSize: [50, 55],
    iconAnchor: [25, 55],
    popupAnchor: [0, -55]
  })
  const userIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/500px-Map_marker.svg.png',
    iconSize: [40, 60],
    iconAnchor: [20, 57],
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
        <Marker position={[position.lat, position.lng]} icon={userIcon}>
          <Popup>
            This one is your current location!
          </Popup>
        </Marker>
      ) : null}
      {markers.length >= 1 ? (
        markers.map(el => {
          return (
            <Marker position={[el.latitude, el.longitude]} icon={Icon}>
              <Popup>
                {el.name} <br /> {el.message}.
              </Popup>
            </Marker>
          )
        })
      ): null}
    </MapContainer>
  );
};

export default Map;
