import Link from "next/link";
import ViewMap from "@/components/pages/group/ViewMap";
import type { Landmark } from "@/lib/types";

interface Props {
  data: Landmark[];
  num: number;
}

export default function Group({ data, num }: Props) {
  return (
    <div className="mt-4 pb-4 pl-3 pr-5 border-t">
      <h3 className="text-lg mt-6">Group {num}</h3>
      <div>
        <ol className="my-8 flex flex-col gap-6">
          {data
            .filter((lm) => lm.group === num)
            .sort((a, b) => a.group_order - b.group_order)
            .map((lm) => (
              <li key={lm.id} className="text-sm md:text-base">
                <Link href={`/landmarks/${lm.slug}`}>
                  {lm.number.toString().includes(".")
                    ? lm.number.toString().replace(".", "-")
                    : lm.number}
                  : {lm.title}
                </Link>
              </li>
            ))}
        </ol>
        <div className="pt-1 flex items-center md:text-lg">
          <ViewMap data={data} num={num} />
        </div>
      </div>
    </div>
  );
}
