"use client";

import { APIProvider, Map as GMap } from "@vis.gl/react-google-maps";
import MarkerWithInfoWindow from "@/components/pages/maps/MarkerWithInfoWindow";
import { config } from "@/lib/config";
import { getMapBounds } from "@/lib/guide/getMapBounds";
import type { Landmark } from "@/lib/types";

type Props =
  | {
      landmark: Landmark;
      variant: "single";
    }
  | {
      landmarks: Landmark[];
      variant: "group";
    };

export default function GoogleMap(props: Props) {
  const { variant } = props;
  return (
    <div className="map">
      <APIProvider apiKey={config.GOOGLE_MAPS_API_KEY}>
        {variant === "single" ? (
          <GMap
            defaultCenter={{ lat: props.landmark.lat, lng: props.landmark.lng }}
            defaultZoom={18}
            disableDefaultUI
            gestureHandling="greedy"
            mapId={config.MAP_ID}
            zoomControl={true}
          >
            <MarkerWithInfoWindow {...props.landmark} />
          </GMap>
        ) : (
          <GMap
            defaultBounds={getMapBounds(props.landmarks)}
            disableDefaultUI
            mapId={config.MAP_ID}
            zoomControl={true}
          >
            {props.landmarks.map((landmark) => {
              return <MarkerWithInfoWindow key={landmark.id} {...landmark} />;
            })}
          </GMap>
        )}
      </APIProvider>
    </div>
  );
}
