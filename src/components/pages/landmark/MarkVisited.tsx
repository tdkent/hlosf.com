"use client";

import { useEffect, useState } from "react";
import type { Landmark } from "@/lib/types";

interface Props {
  id: number;
  slug: string;
}

type VisitedLandmark = Pick<Landmark, "id" | "slug">;

export default function MarkVisited({ id, slug }: Props) {
  const [visited, setVisited] = useState<VisitedLandmark[]>([]);

  // Check local storage for sites visited data, or create an empty array
  useEffect(() => {
    const dataInStorage = localStorage.getItem("sitesVisited");
    if (!dataInStorage) {
      localStorage.setItem("sitesVisited", JSON.stringify([]));
    } else {
      setVisited(JSON.parse(dataInStorage));
    }
  }, []);

  function handleClick() {
    const currLandmark = { id, slug };
    const hasVisited = visited.includes(currLandmark);
  }

  return (
    <div>
      <button onClick={handleClick} type="button">
        Mark visited
      </button>
    </div>
  );
}
