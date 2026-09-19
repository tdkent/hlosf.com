import type { Landmark } from "@/lib/types";

// Adapted from https://github.com/visgl/react-google-maps/discussions/376
export function getMapBounds(landmarks: Landmark[]) {
  let west = 180;
  let east = -180;
  let north = -90;
  let south = 90;

  landmarks.forEach(({ lat, lng }) => {
    west = Math.min(west, lng);
    east = Math.max(east, lng);
    north = Math.max(north, lat);
    south = Math.min(south, lat);
  });

  return { west, east, north, south };
}
