"use client";

import { APIProvider, Map as GoogleMap } from "@vis.gl/react-google-maps";
import MarkerWithInfoWindow from "@/components/pages/MarkerWithInfoWindow";
import { config } from "@/lib/config";
import type { Landmark } from "@/lib/types";

interface Props {
  data: Landmark;
}

export default function SingleLandmarkMap({ data }: Props) {
  const { lat, lng } = data;

  return (
    <div className="map">
      <APIProvider apiKey={config.GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          defaultCenter={{ lat, lng }}
          defaultZoom={18}
          disableDefaultUI
          gestureHandling="greedy"
          mapId={config.LANDMARK_MAP_ID}
        >
          <MarkerWithInfoWindow {...data} />
        </GoogleMap>
      </APIProvider>
    </div>
  );
}
