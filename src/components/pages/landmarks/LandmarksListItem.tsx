import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import type { Landmark } from "@/lib/types";
import { updateComplexLmNumber } from "@/lib/updateComplexLmNumber";

interface Props {
  landmark: Landmark;
}

export default function LandmarksListItem({ landmark }: Props) {
  const { group, number, slug, title } = landmark;

  return (
    <li className="py-2.5 border-b first:border-t lg:py-4">
      <Link href={`/landmarks/${slug}`} className="w-full">
        <div className="flex justify-between items-center gap-6 px-2 lg:px-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-pretty lg:text-lg">{title}</h2>
            <div className="font-light text-sm md:text-base">
              <div className="flex flex-row items-center gap-6 text-foreground-secondary">
                <span className="flex flex-row items-center gap-1">
                  No. {updateComplexLmNumber(number)}
                </span>
                <span>Group {group}</span>
              </div>
            </div>
          </div>
          <FaAngleRight className="size-4 fill-foreground-secondary shrink-0 lg:size-5" />
        </div>
      </Link>
    </li>
  );
}
