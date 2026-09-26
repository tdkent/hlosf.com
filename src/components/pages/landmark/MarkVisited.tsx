"use client";

import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useLocalStorage } from "usehooks-ts";
import { STORAGE_ITEM } from "@/lib/constants";
import type { VisitedLandmark } from "@/lib/types";

interface Props {
  id: number;
  slug: string;
}

export default function MarkVisited({ id, slug }: Props) {
  const [hasVisited, setHasVisited] = useState(false);
  const [visited, setVisited] = useLocalStorage<VisitedLandmark[]>(
    STORAGE_ITEM,
    [],
  );

  // Track visited boolean value
  useEffect(() => {
    const hasVisited = visited.find((landmark) => landmark.id === id);
    setHasVisited(!!hasVisited);
  }, [id, visited]);

  function handleClick() {
    const currLandmark = { id, slug };

    const updatedData = hasVisited
      ? // Remove if already visited
        [...visited].filter((landmark) => landmark.id !== id)
      : // Add if not already visited
        [...visited, currLandmark];

    setVisited(updatedData);
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
