"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { config } from "@/lib/config";
import type { Landmark } from "@/lib/types";

interface Props {
  data: Landmark;
}

export default function SingleLandmarkMap({ data }: Props) {
  const { lat, lng, address, name, number, group } = data;

  return (
    <div className="map">
      <APIProvider apiKey={config.GOOGLE_MAPS_API_KEY}>
        <Map
          defaultCenter={{ lat, lng }}
          defaultZoom={18}
          disableDefaultUI
          gestureHandling="greedy"
        />
      </APIProvider>
    </div>
  );
}
