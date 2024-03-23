import React, { useState } from 'react';
import markerIcon1 from '../assets/marker1.png';
import markerIcon2 from '../assets/marker2.png';
import img1 from '../assets/terraheal.png';
import img2 from '../assets/ecomassage.png';
import img3 from '../assets/thaimassage.png';
import img4 from '../assets/sensual.png';
import img5 from '../assets/botanica.png';
import img6 from '../assets/corinthia.png';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

const markerIcons = {
  0: markerIcon1,
  1: markerIcon2,
  // Define other marker icons as needed
};

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
    lat: 38.714906,
    lng: -9.131064,
    link: 'https://www.terraheal.com/',
    cardContent: (
      <img src={img1} alt='' style={{ width: '300px', height: '170px' }} />
    ),
    address: 'R. do Telhal 4b, 1150-321 Lisboa',
  },
  {
    lat: 38.712597,
    lng: -9.135928,
    link: 'https://www.ecomassage.com/?lang=pt-pt',
    cardContent: (
      <img src={img2} alt='' style={{ width: '300px', height: '170px' }} />
    ),
    address: 'R. dos Fanqueiros 110, 1100-232 Lisboa',
  },
  {
    lat: 38.715314,
    lng: -9.140018,
    link: 'https://www.myothaimassage.pt/',
    cardContent: (
      <img src={img3} alt='' style={{ width: '300px', height: '170px' }} />
    ),
    address: 'R. dos Sapateiros 41, 1100-060 Lisboa',
  },
  {
    lat: 38.711962,
    lng: -9.138024,
    link: 'https://massagem-sensual.com/pt/',
    cardContent: (
      <img src={img4} alt='' style={{ width: '300px', height: '170px' }} />
    ),
    address: 'R. da Madalena 215, Lisbon',
  },
  {
    lat: 38.731145,
    lng: -9.160203,
    link: 'https://thebotanicalmassage.com/',
    cardContent: (
      <img src={img5} alt='' style={{ width: '300px', height: '170px' }} />
    ),
    address: 'Calçada do Sacramento 20, 1200-394 Lisboa',
  },
  {
    lat: 38.712922,
    lng: -9.141686,
    link: 'https://www.corinthia.com/pt-pt/lisbon/the-spa-by-corinthia-lisbon/',
    cardContent: (
      <img src={img6} alt='' style={{ width: '300px', height: '170px' }} />
    ),
    address: 'Av. Columbano Bordalo Pinheiro 105, 1099-031 Lisbon',
  },
];

function MapsComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [showCard, setShowCard] = useState(false); // State to manage card visibility

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleMarkerClick = point => {
    setSelectedPoint(point);
    setShowCard(false); // Hide card when marker is clicked
  };

  const handleInfoWindowClose = () => {
    setSelectedPoint(null);
    setShowCard(false); // Hide card when info window is closed
  };

  const handleLinkMouseEnter = () => {
    setShowCard(true); // Show card when mouse enters the link
  };

  const handleLinkMouseLeave = () => {
    setShowCard(false); // Hide card when mouse leaves the link
  };

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
        }}
      >
        {points.map((point, i) => (
          <Marker
            key={i}
            position={{ lat: point.lat, lng: point.lng }}
            onClick={() => handleMarkerClick(point)}
            icon={{
              url: markerIcon1,
              scaledSize: new window.google.maps.Size(40, 40), // Adjust the size as needed
            }}
          />
        ))}
        {selectedPoint && (
          <InfoWindow
            position={{ lat: selectedPoint.lat, lng: selectedPoint.lng }}
            onCloseClick={handleInfoWindowClose}
          >
            {selectedPoint.link ? (
              <a
                href={selectedPoint.link}
                target='_blank'
                rel='noopener noreferrer'
                onMouseEnter={handleLinkMouseEnter}
                onMouseLeave={handleLinkMouseLeave}
              >
                Website
              </a>
            ) : (
              <div>No link available</div>
            )}
          </InfoWindow>
        )}
        {showCard && selectedPoint && selectedPoint.cardContent && (
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: 0,
              backgroundColor: 'white',
              padding: 10,
              zIndex: 999,
            }}
          >
            {selectedPoint.cardContent}
          </div>
        )}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MapsComponent);
