import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { getGoogleMaps } from '../api/googlemaps.api';
import pointsData from '../data/points.json';

const containerStyle = {
  width: '70%',
  height: '60vh',
  margin: 'auto',
};

const center = {
  lat: 38.7223,
  lng: -9.1393,
};

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

  const handleMarkerMouseEnter = point => {
    setSelectedPoint(point);
    setShowCard(true);
  };

  const handleMarkerMouseLeave = () => {
    setShowCard(false);
  };

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
        }}
      >
        {pointsData.map((point, i) => (
          <Marker
            key={i}
            position={{ lat: point.lat, lng: point.lng }}
            onClick={() => handleMarkerClick(point)}
            onMouseEnter={() => handleMarkerMouseEnter(point)}
            onMouseLeave={handleMarkerMouseLeave}
            icon={{
              url: `http://maps.google.com/mapfiles/ms/icons/${point.color}-dot.png`,
              scaledSize: new window.google.maps.Size(34, 34),
            }}
          />
        ))}
        {selectedPoint && (
          <InfoWindow
            position={{ lat: selectedPoint.lat, lng: selectedPoint.lng }}
            onCloseClick={handleInfoWindowClose}
          >
            <div>
              <p style={{ fontWeight: 'bold' }}>{selectedPoint.serviceName}</p>
              <p>
                Link:
                <a
                  href={selectedPoint.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {selectedPoint.link}
                </a>
              </p>
            </div>
          </InfoWindow>
        )}
        {showCard && selectedPoint && selectedPoint.image && (
          <InfoWindow
            position={{ lat: selectedPoint.lat, lng: selectedPoint.lng }}
            onCloseClick={handleInfoWindowClose}
          >
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
              <a
                href={selectedPoint.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={require(`../assets/${selectedPoint.image}`).default}
                  alt=''
                  style={{ width: '300px', height: '170px' }}
                />
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MapsComponent);
