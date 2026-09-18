import { data } from "@/data/data.json";

export function getSortedLandmarks(sortMethod: string | undefined) {
  switch (sortMethod) {
    case "group": {
      return [...data].sort((a, b) => a.group - b.group);
    }

    case "name": {
      return [...data].sort((a, b) => a.name.localeCompare(b.name));
    }

    default: {
      return [...data].sort((a, b) => a.number - b.number);
    }
  }
}
