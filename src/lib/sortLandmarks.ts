import { data } from "@/data/data.json";

export function getSortedLandmarks(sortMethod: string | null) {
  switch (sortMethod) {
    case "group": {
      return [...data].sort((a, b) => a.group - b.group);
    }

    case "title": {
      return [...data].sort((a, b) => a.title.localeCompare(b.title));
    }

    default: {
      return [...data].sort((a, b) => a.number - b.number);
    }
  }
}
