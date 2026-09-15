import { FaLandmark } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import ViewMap from "@/components/pages/landmark/ViewMap";
import type { Landmark } from "@/lib/types";

interface Props {
  landmark: Landmark;
}

export default function SingleLandmarkInfo({ landmark }: Props) {
  const { number, title, group, marker_address } = landmark;
  return (
    <>
      <div className="flex items-center justify-center">
        <FaLandmark className="mr-2 fill-slate-600" />
        <p className="text-slate-600">{number}</p>
      </div>
      <h1 className="text-center">{title}</h1>
      <div className="my-2 mx-auto py-2 border-y text-center">
        <ul className="font-light text-sm md:text-base">
          <li className="my-1 italic">Group {group}</li>
          <li className="my-1">{marker_address}</li>
          <li className="flex items-center justify-center my-1 text-lg">
            <GrMapLocation className="mr-1" />
            <ViewMap landmark={landmark} />
          </li>
        </ul>
      </div>
    </>
  );
}
