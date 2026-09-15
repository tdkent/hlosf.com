import LandmarksListItem from "@/components/pages/landmarks/LandmarksListItem";
import type { Landmark } from "@/lib/types";

interface Props {
  sortedLandmarks: Landmark[];
}

const LandmarksList = ({ sortedLandmarks }: Props) => {
  return (
    <ul className="grid grid-cols-1 my-4">
      {sortedLandmarks.map((landmark) => {
        return <LandmarksListItem key={landmark.id} landmark={landmark} />;
      })}
    </ul>
  );
};

export default LandmarksList;
