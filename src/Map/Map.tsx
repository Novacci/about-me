import './Map.scss';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import { useContext } from 'react';
import ThemeContext from '../Store/ThemeContext';
import styles from '../Main/Main.module.scss';

const position: [number, number] = [51.1, 17.0333];

const Map = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const lightMap = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const darkMap = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';

  return (
    <>
      <div className={styles['map-container']}>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          attributionControl={false}
          zoomControl={false}
        >
          <TileLayer url={theme === 'dark' ? darkMap : lightMap} />'
          <ZoomControl position="bottomright" />
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
