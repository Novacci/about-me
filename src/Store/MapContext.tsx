import { createContext } from 'react';
import Map from '../Map/Map';

const MapContext = createContext<JSX.Element>(<Map />);

export default MapContext;
