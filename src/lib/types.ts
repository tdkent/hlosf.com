export interface Landmark {
  id: number;
  name: string;
  number: number;
  dedicationYear?: number;
  description: string;
  update_html?: string;
  group: number;
  groupOrder: number;
  hasMarker: boolean;
  markerText: string;
  address: string;
  lat: number;
  lng: number;
  slug: string;
  numImgs: number;
}

export type SortMethod = "group" | "name" | "number";

export interface NavLink {
  label: string;
  href: string;
}

export type VisitedLandmark = Pick<Landmark, "id" | "slug">;
