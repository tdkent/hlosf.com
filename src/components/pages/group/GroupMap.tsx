"use client";

import { APIProvider, Map as GoogleMap } from "@vis.gl/react-google-maps";
import MarkerWithInfoWindow from "@/components/pages/MarkerWithInfoWindow";
import { config } from "@/lib/config";
import { getMapBounds } from "@/lib/guide/getMapBounds";
import type { Landmark } from "@/lib/types";

interface Props {
  landmarks: Landmark[];
}

export default function GroupMap({ landmarks }: Props) {
  const bounds = getMapBounds(landmarks);

  return (
    <div className="map">
      <APIProvider apiKey={config.GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          defaultBounds={bounds}
          disableDefaultUI
          mapId={config.LANDMARK_MAP_ID}
          zoomControl={true}
        >
          {landmarks.map((landmark) => {
            return <MarkerWithInfoWindow key={landmark.id} {...landmark} />;
          })}
        </GoogleMap>
      </APIProvider>
    </div>
  );
}
