import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
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
import { getGoogleMaps } from '../api/googlemaps.api';

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
      <img src={img1} alt='' style={{ width: '280px', height: '170px' }} />
    ),
  },
  {
    lat: 38.712597,
    lng: -9.135928,
    link: 'https://www.ecomassage.com/?lang=pt-pt',
    cardContent: (
      <img src={img2} alt='' style={{ width: '300px', height: '170px' }} />
    ),
  },
  {
    lat: 38.715314,
    lng: -9.140018,
    link: 'https://www.myothaimassage.pt/',
    cardContent: (
      <img src={img3} alt='' style={{ width: '300px', height: '170px' }} />
    ),
  },
  {
    lat: 38.711962,
    lng: -9.138024,
    link: 'https://massagem-sensual.com/pt/',
    cardContent: (
      <img src={img4} alt='' style={{ width: '300px', height: '170px' }} />
    ),
  },
  {
    lat: 38.731145,
    lng: -9.160203,
    link: 'https://thebotanicalmassage.com/',
    cardContent: (
      <img src={img5} alt='' style={{ width: '300px', height: '170px' }} />
    ),
  },
  {
    lat: 38.712922,
    lng: -9.141686,
    link: 'https://www.corinthia.com/pt-pt/lisbon/the-spa-by-corinthia-lisbon/',
    cardContent: (
      <img src={img6} alt='' style={{ width: '300px', height: '170px' }} />
    ),
  },
];

function MapsComponent() {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getGoogleMaps();
      } catch (error) {
        console.error('Error fetching map data:', error);
      }
    };
    fetchData();
  }, []);

  const handleMarkerClick = point => {
    setSelectedPoint(point);
    setShowCard(false);
  };

  const handleInfoWindowClose = () => {
    setSelectedPoint(null);
    setShowCard(false);
  };

  const handleLinkMouseEnter = () => {
    setShowCard(true);
  };

  const handleLinkMouseLeave = () => {
    setShowCard(false);
  };

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
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
              path: <FontAwesomeIcon icon={faMapMarker} />,
              scale: 0.5,
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
