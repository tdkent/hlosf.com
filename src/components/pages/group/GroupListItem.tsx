import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { data } from "@/data/data.json";

interface Props {
  groupNum: number;
}

export default function GroupListItem({ groupNum }: Props) {
  const groupSize = data.filter(
    (landmark) => landmark.group === groupNum,
  ).length;

  return (
    <li key={groupNum} className="py-2.5 w-fit lg:py-4">
      <Link href={`/guide/group-${groupNum}`} className="link">
        <div className="flex items-center gap-6">
          Group {groupNum} ({groupSize} landmarks)
          <FaAngleRight className="size-4 fill-foreground-secondary shrink-0 lg:size-5" />
        </div>
      </Link>
    </li>
  );
}
