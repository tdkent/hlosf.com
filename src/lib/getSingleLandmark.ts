import { data } from "@/data/data.json";

export function getSingleLandmark(slug: string) {
  return data.find((lm) => lm.slug === slug);
}
