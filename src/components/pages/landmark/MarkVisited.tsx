"use client";

import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import type { Landmark } from "@/lib/types";

interface Props {
  id: number;
  slug: string;
}

type VisitedLandmark = Pick<Landmark, "id" | "slug">;

const STORAGE_ITEM = "sitesVisited";

export default function MarkVisited({ id, slug }: Props) {
  const [visited, setVisited] = useState<VisitedLandmark[]>([]);
  const [hasVisited, setHasVisited] = useState(false);

  // Check local storage for sites visited data, or create an empty array
  useEffect(() => {
    const dataInStorage = localStorage.getItem(STORAGE_ITEM);
    if (!dataInStorage) {
      localStorage.setItem(STORAGE_ITEM, JSON.stringify([]));
    } else {
      setVisited(JSON.parse(dataInStorage));
    }
  }, []);

  // Track visited boolean value
  useEffect(() => {
    const hasVisited = visited.find((landmark) => landmark.id === id);
    setHasVisited(!!hasVisited);
  }, [id, visited]);

  function handleClick() {
    const currLandmark = { id, slug };
    // const hasVisited = visited.find((landmark) => landmark.id === id);

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
      <button
        className="border rounded-lg bg-background-secondary px-6 py-2.5 w-fit font-medium cursor-pointer"
        onClick={handleClick}
        type="button"
      >
        {hasVisited ? (
          <span className="flex items-center gap-2.5">
            <FaCheck className="fill-green-600" />
            Visited
          </span>
        ) : (
          "Not visited"
        )}
      </button>
    </div>
  );
}
