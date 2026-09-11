import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";
import type { Landmark } from "@/lib/types";
import styles from "@/styles/SingleLandmarkMap.module.css";

interface Props {
  data: Landmark;
}

const SingleLandmarkMap = ({ data }: Props) => {
  const {
    marker_coordinates_lat,
    marker_coordinates_lng,
    marker_address,
    title,
    number,
    group,
  } = data;

  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
      version: "weekly",
    });

    const center = {
      lat: marker_coordinates_lat,
      lng: marker_coordinates_lng,
    };

    let map: google.maps.Map;

    loader.load().then(() => {
      if (!mapRef.current) return;

      map = new google.maps.Map(mapRef.current, {
        center,
        zoom: 18,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `<div style="padding:0 3px 6px 3px"><p>${title}</p><p style="padding: 4px 0">Number: ${number}, Group: ${group}</p><p>Address: ${marker_address}</div>`,
        ariaLabel: title,
      });
      const marker = new google.maps.Marker({
        position: center,
        map,
        title,
      });
      marker.addListener("click", () => {
        infoWindow.open({
          anchor: marker,
          map,
        });
      });
    });
  }, [
    marker_coordinates_lat,
    marker_coordinates_lng,
    marker_address,
    title,
    number,
    group,
  ]);
  return <div className={`${styles.map}`} ref={mapRef} />;
};

export default SingleLandmarkMap;
