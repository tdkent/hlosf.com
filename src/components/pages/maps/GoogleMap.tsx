"use client";

import {
  APIProvider,
  Map as GMap,
  type MapProps,
} from "@vis.gl/react-google-maps";
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

  const mapOptions: MapProps = {
    disableDefaultUI: true,
    fullscreenControl: true,
    gestureHandling: "cooperative",
    mapId: config.MAP_ID,
    mapType: false,
    scaleControl: false,
    streetViewControl: false,
    zoomControl: true,
  };

  return (
    <div className="map">
      <APIProvider apiKey={config.GOOGLE_MAPS_API_KEY}>
        {variant === "single" ? (
          <GMap
            defaultCenter={{ lat: props.landmark.lat, lng: props.landmark.lng }}
            defaultZoom={18}
            {...mapOptions}
          >
            <MarkerWithInfoWindow {...props.landmark} />
          </GMap>
        ) : (
          <GMap defaultBounds={getMapBounds(props.landmarks)} {...mapOptions}>
            {props.landmarks.map((landmark) => {
              return <MarkerWithInfoWindow key={landmark.id} {...landmark} />;
            })}
          </GMap>
        )}
      </APIProvider>
    </div>
  );
}
