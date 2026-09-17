export interface Landmark {
  id: number;
  title: string;
  title_short: string;
  title_stub: string;
  number: number;
  dedication_year?: number;
  description_html: string;
  update_html?: string;
  group: number;
  group_order: number;
  marker_onsite: string;
  marker_inscription_html: string;
  marker_address: string;
  marker_coordinates_lat: number;
  marker_coordinates_lng: number;
  slug: string;
  description_meta: string;
  imgUrls: string[];
}

export type SortMethod = "group" | "title" | "number";

export interface NavLink {
  label: string;
  href: string;
}
