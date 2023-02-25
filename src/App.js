import './App.css';
import { Marker, Popup, MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import LeafletGeocoder from './LeafletGeocoder';

function App() {
  const position = [35.825603, 10.608395]

  return (
    <div className="App">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LeafletGeocoder />
      </MapContainer>
    </div>
  );
}
let DefaultIcon = L.icon(
  {
    iconUrl: "./icon.png",
    iconSize: [25, 31],


  }
);
L.Marker.prototype.options.icon = DefaultIcon
export default App;
