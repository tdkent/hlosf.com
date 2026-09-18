"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";
import type { Landmark } from "@/lib/types";

interface Props {
  data: Landmark;
}

export default function SingleLandmarkMap({ data }: Props) {
  const { lat, lng, address, name, number, group } = data;

  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
      version: "weekly",
    });

    const center = {
      lat: lat,
      lng: lng,
    };

    let map: google.maps.Map;

    loader.load().then(() => {
      if (!mapRef.current) return;

      map = new google.maps.Map(mapRef.current, {
        center,
        zoom: 18,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `<div style="padding:0 3px 6px 3px"><p>${name}</p><p style="padding: 4px 0">Number: ${number}, Group: ${group}</p><p>Address: ${address}</div>`,
        ariaLabel: name,
      });
      const marker = new google.maps.Marker({
        position: center,
        map,
        name,
      });
      marker.addListener("click", () => {
        infoWindow.open({
          anchor: marker,
          map,
        });
      });
    });
  }, [lat, lng, address, name, number, group]);
  return <div className="map" ref={mapRef} />;
}
