import { useEffect } from "react";
import { FaLandmark } from "react-icons/fa";
import LandmarkLink from "@/components/pages/landmarks/LandmarkLink";
import type { Landmark } from "@/lib/types";

interface Props {
  sortedData: Landmark[];
  windowWidth: number | null;
  scrollId: string | null;
}

const LandmarksList = ({ sortedData, windowWidth, scrollId }: Props) => {
  // Preserve user's scroll position in landmark list
  useEffect(() => {
    if (scrollId) {
      const element = document.getElementById(scrollId) as HTMLElement;
      element.scrollIntoView({ behavior: "auto", block: "start" });
    } else return;
  });

  return (
    <div className="grid grid-cols-1 mt-4 mx-2">
      {sortedData.map((lm) => {
        return (
          <div
            key={lm.id}
            id={`${lm.id}`}
            className="flex flex-row items-center justify-between py-2 border-b first:border-t last:border-none scroll-mt-15"
          >
            <div className="md:ml-4 xl:ml-0">
              <h2 className="text-sm md:text-base mb-1">
                {windowWidth && windowWidth <= 320
                  ? lm.title_stub
                  : windowWidth && windowWidth >= 1280
                    ? lm.title
                    : lm.title_short}
              </h2>
              <div className="font-light text-sm md:text-base my-1">
                <ul className="flex flex-row items-center">
                  <li className="px-1 py-0.5 flex flex-row items-center">
                    <FaLandmark className="mr-1.5 fill-slate-600 " />
                    {lm.number.toString().includes(".")
                      ? lm.number.toString().replace(".", "-")
                      : lm.number}
                  </li>
                  <li className="py-0.5 px-1 mx-4 italic">Group {lm.group}</li>
                </ul>
              </div>
            </div>
            <LandmarkLink id={lm.id} slug={lm.slug} />
          </div>
        );
      })}
    </div>
  );
};

export default LandmarksList;
