import Link from "next/link";
import { FaAngleRight, FaCheck } from "react-icons/fa";
import { updateComplexLmNumber } from "@/lib/landmarks/updateComplexLmNumber";
import type { Landmark } from "@/lib/types";

interface Props {
  hasVisited: boolean;
  landmark: Landmark;
}

export default function LandmarksListItem({ hasVisited, landmark }: Props) {
  const { group, number, slug, name } = landmark;

  return (
    <li className="py-2.5 border-b first:border-t lg:py-4">
      <Link href={`/landmarks/${slug}`} className="w-full">
        <div className="flex justify-between items-center gap-6 px-2 lg:px-4">
          <div className="flex flex-col gap-2">
            <span className="text-pretty font-medium">{name}</span>
            <div className="flex flex-row items-center gap-6 text-foreground-secondary">
              <span className="flex flex-row items-center gap-1">
                No. {updateComplexLmNumber(number)}
              </span>
              <span>Group {group}</span>
              {hasVisited && <FaCheck className="fill-green-600" />}
            </div>
          </div>
          <FaAngleRight className="size-4 fill-foreground-secondary shrink-0 lg:size-5" />
        </div>
      </Link>
    </li>
  );
}
