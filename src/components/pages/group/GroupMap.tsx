"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";
import type { Landmark } from "@/lib/types";

interface Props {
  data: Landmark[];
  num: number;
}

export default function GroupMap({ data, num }: Props) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
      version: "weekly",
    });

    let map: google.maps.Map;

    loader.load().then(() => {
      if (!mapRef.current) return;

      map = new google.maps.Map(mapRef.current);

      const markersArr: google.maps.Marker[] = [];

      data.forEach((lm) => {
        if (lm.group === num) {
          const infoWindow = new google.maps.InfoWindow({
            content: `<div style="padding:0 3px 6px 3px"><p>${lm.name}</p><p style="padding: 4px 0">Number: ${lm.number}, Group: ${lm.group}</p><p>Address: ${lm.address}</div>`,
            ariaLabel: lm.name,
          });
          const position = {
            lat: lm.lat,
            lng: lm.lng,
          };
          const marker = new google.maps.Marker({
            position,
            map,
            title: lm.name,
            label: lm.group.toString(),
          });
          markersArr.push(marker);
          marker.addListener("click", () => {
            infoWindow.open({
              anchor: marker,
              map,
            });
          });
        }
      });

      const bounds = new google.maps.LatLngBounds();

      markersArr.forEach((marker) => {
        const position = marker.getPosition();

        if (position) {
          bounds.extend(position);
        }

        map.fitBounds(bounds);
      });
    });
  });
  return <div className="map" ref={mapRef} />;
}
