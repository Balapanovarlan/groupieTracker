import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; 

console.log(GOOGLE_MAPS_API_KEY);

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '500px'
};

const defaultCenter = {
  lat: 48.8566,
  lng: 2.3522
};

const MapCard = ({ city = "Paris", country = "France" }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries
  });

  const [markerPosition, setMarkerPosition] = useState(null);

  useEffect(() => {
    const geocodeLocation = async () => {
      const address = `${city}, ${country}`;
      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const location = results[0].geometry.location;
          setMarkerPosition({
            lat: location.lat(),
            lng: location.lng()
          });
        } else {
          console.error('Geocode was not successful:', status);
        }
      });
    };

    if (isLoaded) {
      geocodeLocation();
    }
  }, [isLoaded, city, country]);

  if (loadError) return <div>Ошибка загрузки карты</div>;
  if (!isLoaded) return <div>Загрузка карты...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={markerPosition || defaultCenter}
    >
      {markerPosition && <Marker position={markerPosition} />}
    </GoogleMap>
  );
};

export default MapCard;
