import { data } from "@/data/data.json";

export function getLandmarksByGroupId(id: number) {
  return data
    .filter((landmark) => landmark.group === id)
    .sort((a, b) => a.groupOrder - b.groupOrder);
}
