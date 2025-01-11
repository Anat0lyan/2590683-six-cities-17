import { useEffect, useRef, useState } from 'react';
import leaflet from 'leaflet';

function useMap(
  mapRef: React.RefObject<HTMLDivElement>,
  city: {
    title: string;
    lat: number;
    lng: number;
    zoom: number;
  }
) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    } else {
      if (map !== null) {
        map.setView([city.lat, city.lng], city.zoom);
      }
    }
  }, [mapRef, city, map]);

  return map;
}

export default useMap;
