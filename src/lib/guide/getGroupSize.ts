import { data } from "@/data/data.json";

export function getGroupSize(groupNum: number) {
  return data.filter((landmark) => landmark.group === groupNum).length;
}
