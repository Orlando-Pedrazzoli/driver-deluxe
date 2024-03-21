import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '70%',
  height: '50vh',
  margin: 'auto',
};

const center = {
  lat: 38.7223,
  lng: -9.1393,
};

const points = [
  {
    lat: 38.712211,
    lng: -9.135951,
  },
  {
    lat: 38.709841,
    lng: -9.138871,
  },
  {
    lat: 38.735346,
    lng: -9.160083,
  },
  {
    lat: 38.708287,
    lng: -9.140492,
  },
];

function MapsComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);
  const [searchAddress, setSearchAddress] = useState('');

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleSearchChange = event => {
    setSearchAddress(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    // Perform search using the entered address (searchAddress)
    // Implement search functionality here, e.g., using Geocoding service
  };

  return isLoaded ? (
    <div>
      <div className='flex justify-center items-center p-5 mb-4'>
        <div className='rounded-lg bg-gray-200 p-4'>
          <div className='flex'>
            <div className='flex w-16 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5'>
              <svg
                viewBox='0 0 20 20'
                aria-hidden='true'
                className='pointer-events-none absolute w-5 fill-gray-500 transition'
              >
                <path d='M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z'></path>
              </svg>
            </div>
            <input
              type='text'
              className='w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0'
              placeholder='Search Location...'
              value={searchAddress}
              onChange={handleSearchChange}
            />
            <input
              type='button'
              value='Search'
              className='bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors'
              onClick={handleSearchSubmit}
            />
          </div>
        </div>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
        }}
      >
        {points.map((point, i) => (
          <Marker key={i} position={point} />
        ))}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MapsComponent);
