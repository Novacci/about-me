import './Map.scss';
import { MapContainer, TileLayer } from 'react-leaflet';
import MapContext from '../Store/MapContext';

const Map = () => {
  const position: [number, number] = [51.505, 0.09];

  return (
    <>
      <MapContext.Consumer>
        {() => (
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            attributionControl={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        )}
      </MapContext.Consumer>
    </>
  );
};

export default Map;
