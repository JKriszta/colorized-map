import React  from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MapStyle from './mapStyle';

function MyComponent() {

const mapSize = {
  width: '100vw',
  height: '100vh'
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
      //googleMapsApiKey="AIzaSyBA5QIDjrpY_Fq6nTfr4P4tDIFyf-EeR7U">
      googleMapsApiKey="AIzaSyD6jd0SZQg_SAINn65qVHjRX9bcTLTBvRQ">
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