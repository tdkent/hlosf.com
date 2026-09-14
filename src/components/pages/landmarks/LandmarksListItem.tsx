import Link from "next/link";
import { FaLandmark } from "react-icons/fa";
import type { Landmark } from "@/lib/types";

interface Props {
  landmark: Landmark;
}

export default function LandmarksListItem({ landmark }: Props) {
  const { group, number, slug, title } = landmark;
  return (
    <li className="flex flex-row items-center justify-between py-2 border-b first:border-t last:border-none scroll-mt-15">
      <Link href={`/landmarks/${slug}`} className="w-full">
        <h2 className="text-sm md:text-base mb-1">{title}</h2>
        <div className="font-light text-sm md:text-base my-1">
          <div className="flex flex-row items-center">
            <div className="px-1 py-0.5 flex flex-row items-center">
              <FaLandmark className="fill-slate-600" />
              {number.toString().includes(".")
                ? number.toString().replace(".", "-")
                : number}
            </div>
            <div className="py-0.5 px-1 mx-4 italic">Group {group}</div>
          </div>
        </div>
      </Link>
    </li>
  );
}
