export interface Landmark {
  id: number;
  title: string;
  title_short: string;
  title_stub: string;
  number: number;
  dedication_year: number;
  description_html: string;
  update_html?: string;
  group: number;
  group_order: number;
  marker_onsite: "TRUE" | "FALSE";
  marker_inscription_html: string;
  marker_address: string;
  marker_coordinates_lat: number;
  marker_coordinates_lng: number;
  slug: string;
  description_meta: string;
  img_urls: string[];
}

export type SortMethod = "group" | "title_short" | "number";
