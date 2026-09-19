import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useCallback, useState } from "react";

interface Props {
  address: string;
  lat: number;
  lng: number;
  name: string;
  number: number;
}

// Component adapted from react-google-maps docs:
// https://visgl.github.io/react-google-maps/docs/api-reference/components/info-window#infowindow-attached-to-marker

export default function MarkerWithInfoWindow({
  address,
  lat,
  lng,
  name,
  number,
}: Props) {
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [infoWindowShown, setInfoWindowShown] = useState(false);

  // clicking the marker will toggle the infowindow
  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    [],
  );

  // if the maps api closes the infowindow, we have to synchronize our state
  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={{ lat, lng }}
        onClick={handleMarkerClick}
      >
        <Pin
          scale={1.2}
          background="oklch(74.6% 0.160 232)"
          borderColor="oklch(20.8% 0.042 265)"
          glyphColor="oklch(58.8% 0.158 241)"
        />
      </AdvancedMarker>

      {infoWindowShown && (
        <InfoWindow anchor={marker} onClose={handleClose}>
          <div className="font-sans">
            <h3 className="font-medium text-sm">{name}</h3>
            <p>Landmark No. {number}</p>
            <p>{address}</p>
          </div>
        </InfoWindow>
      )}
    </>
  );
}
