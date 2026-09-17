export interface Landmark {
  id: number;
  name: string;
  number: number;
  dedicationYear?: number;
  description: string;
  update_html?: string;
  group: number;
  groupOrder: number;
  hasMarker: string;
  markerText: string;
  address: string;
  lat: number;
  lng: number;
  slug: string;
  imgUrls: string[];
}

export type SortMethod = "group" | "name" | "number";

export interface NavLink {
  label: string;
  href: string;
}
