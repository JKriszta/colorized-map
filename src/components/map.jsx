import React  from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MapStyle from './mapStyle';

function MyComponent() {

const mapSize = {
  width: '800px',
  height: '700px'
};

const center = {
  lat: -18.07,
  lng: 178.27
};

  const options ={
    styles: MapStyle,
    disableDefaultUi: true,
    zoomControl: true,

  }

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBlU3EgITUJYVFMEQM6RxOixYQ-EtacWPY">
      <GoogleMap
        options={options}
        mapContainerStyle={mapSize}
        center={center}
        zoom={8}
      />
    </LoadScript>
  )
}

export default React.memo(MyComponent);