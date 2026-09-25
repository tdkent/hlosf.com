"use client";

import { useEffect, useState } from "react";
import LandmarksListItem from "@/components/pages/landmarks/LandmarksListItem";
import { STORAGE_ITEM } from "@/lib/constants";
import type { Landmark, VisitedLandmark } from "@/lib/types";

interface Props {
  sortedLandmarks: Landmark[];
}

const LandmarksList = ({ sortedLandmarks }: Props) => {
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

  return (
    <ul className="grid grid-cols-1 my-4">
      {sortedLandmarks.map((landmark) => {
        return <LandmarksListItem key={landmark.id} landmark={landmark} />;
      })}
    </ul>
  );
};

export default LandmarksList;
