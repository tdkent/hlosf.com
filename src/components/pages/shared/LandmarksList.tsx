"use client";

import { useLocalStorage } from "usehooks-ts";
import LandmarksListItem from "@/components/pages/landmarks/LandmarksListItem";
import { STORAGE_ITEM } from "@/lib/constants";
import type { Landmark, VisitedLandmark } from "@/lib/types";

interface Props {
  landmarks: Landmark[];
}

const LandmarksList = ({ landmarks }: Props) => {
  const [visited] = useLocalStorage<VisitedLandmark[]>(STORAGE_ITEM, []);

  return (
    <ul className="my-4">
      {landmarks.map((landmark) => {
        const hasVisited = visited.find((lm) => lm.id === landmark.id);

        return (
          <LandmarksListItem
            key={landmark.id}
            landmark={landmark}
            hasVisited={!!hasVisited}
          />
        );
      })}
    </ul>
  );
};

export default LandmarksList;
