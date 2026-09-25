"use client";

import { useEffect, useState } from "react";
import type { Landmark } from "@/lib/types";

interface Props {
  id: number;
  slug: string;
}

type VisitedLandmark = Pick<Landmark, "id" | "slug">;

const STORAGE_ITEM = "sitesVisited";

export default function MarkVisited({ id, slug }: Props) {
  const [visited, setVisited] = useState<VisitedLandmark[]>([]);

  // Check local storage for sites visited data, or create an empty array
  useEffect(() => {
    const dataInStorage = localStorage.getItem(STORAGE_ITEM);
    if (!dataInStorage) {
      localStorage.setItem(STORAGE_ITEM, JSON.stringify([]));
    } else {
      setVisited(JSON.parse(dataInStorage));
    }
  }, []);

  function handleClick() {
    const currLandmark = { id, slug };
    const hasVisited = visited.find((landmark) => landmark.id === id);

    const updatedData = hasVisited
      ? // Remove if already visited
        [...visited].filter((landmark) => landmark.id !== id)
      : // Add if not already visited
        [...visited, currLandmark];

    setVisited(updatedData);
    localStorage.setItem(STORAGE_ITEM, JSON.stringify(updatedData));
  }

  return (
    <div>
      <button onClick={handleClick} type="button">
        Mark visited
      </button>
    </div>
  );
}
