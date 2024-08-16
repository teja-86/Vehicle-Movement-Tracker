import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import vehicleIconUrl from '../assets/images/car.png'; // Adjust path as needed
import startIconUrl from '../assets/images/placeholder.png'; // Adjust path as needed
import endIconUrl from '../assets/images/destination.png'; // Adjust path as needed

// Component to fit the map to the route bounds
const FitBounds = ({ route }) => {
  const map = useMap();
  useEffect(() => {
    if (route.length > 0) {
      const bounds = L.latLngBounds(route);
      map.fitBounds(bounds);
    }
  }, [route, map]);
  return null;
};

const VehicleMap = () => {
  const route = [
    [51.505, -0.09],
    [51.5055, -0.089],
    [51.506, -0.088],
    [51.507, -0.086],
    [51.508, -0.085],
    [51.509, -0.083],
    [51.510, -0.08],
    [51.511, -0.077],
    [51.512, -0.074],
    [51.513, -0.07],
    [51.514, -0.067],
    [51.515, -0.064],
    [51.516, -0.06],
    [51.517, -0.058],
    [51.518, -0.055],
    [51.519, -0.052],
    [51.520, -0.05],
    [51.521, -0.048],
    [51.522, -0.045],
    [51.523, -0.042],
    [51.524, -0.038],
    [51.525, -0.035],
    [51.526, -0.03],
    [51.527, -0.025],
    [51.528, -0.02],
    [51.529, -0.015],
    [51.530, -0.01],
    [51.531, -0.005],
    [51.532, 0],
  ];

  const [vehiclePosition, setVehiclePosition] = useState(route[0]);
  const [traveledPath, setTraveledPath] = useState([route[0]]);
  const [routeIndex, setRouteIndex] = useState(0);

  const calculateAngle = (start, end) => {
    const dx = end[1] - start[1];
    const dy = end[0] - start[0];
    return Math.atan2(dy, dx) * (180 / Math.PI);
  };

  useEffect(() => {
    if (route.length === 0) return;

    const interval = setInterval(() => {
      setRouteIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex >= route.length) {
          clearInterval(interval);
          return prevIndex;
        }

        const newPosition = route[nextIndex];
        setVehiclePosition(newPosition);
        setTraveledPath((prevPath) => [...prevPath, newPosition]);
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [route]);

  const startPoint = route[0];
  const endPoint = route[route.length - 1];
  const nextPoint = route[Math.min(routeIndex + 1, route.length - 1)];
  const angle = calculateAngle(vehiclePosition, nextPoint);

  // Function to create a rotated icon
  const createRotatedIcon = (iconUrl) => {
    return new L.Icon({
      iconUrl: iconUrl,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      className: `leaflet-icon`,
    });
  };

  const vehicleIcon = createRotatedIcon(vehicleIconUrl);

  return (
    <div className="h-screen w-full flex flex-col items-center bg-gray-200 p-8">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Vehicle Movement Tracker</h1>
      <div className="relative w-full h-96 rounded-2xl shadow-xl overflow-hidden bg-white border border-gray-300">
        <MapContainer center={vehiclePosition} zoom={14} scrollWheelZoom={false} className="w-full h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution=''
          />
          <FitBounds route={route} />
          <Polyline positions={route} color="green" weight={4} />
          <Polyline positions={traveledPath} color="blue" weight={5} />
          {/* Car marker */}
          <Marker
            position={vehiclePosition}
            icon={vehicleIcon}
            iconOptions={{ style: { transform: `rotate(${angle}deg)`, transformOrigin: 'center center' } }}
          />
          {/* Starting point marker */}
          <Marker position={startPoint} icon={L.icon({ iconUrl: startIconUrl, iconSize: [30, 30] })} />
          {/* Destination point marker */}
          <Marker position={endPoint} icon={L.icon({ iconUrl: endIconUrl, iconSize: [30, 30] })} />
        </MapContainer>
      </div>
    </div>
  );
};

export default VehicleMap;
