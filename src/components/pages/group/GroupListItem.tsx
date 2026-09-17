import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { getGroupSize } from "@/lib/guide/getGroupSize";

interface Props {
  groupNum: number;
}

export default function GroupListItem({ groupNum }: Props) {
  const groupSize = getGroupSize(groupNum);

  return (
    <li key={groupNum} className="py-2.5 w-fit lg:py-4">
      <Link href={`/guide/group-${groupNum}`} className="link hover:underline">
        <div className="flex items-center gap-6">
          Group {groupNum} ({groupSize} landmarks)
          <FaAngleRight className="size-4 fill-foreground-secondary shrink-0 lg:size-5" />
        </div>
      </Link>
    </li>
  );
}
