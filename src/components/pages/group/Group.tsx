import Link from "next/link";
import { useState } from "react";
import MapModal from "@/components/ui/MapModal";
import type { Landmark } from "@/lib/types";

interface Props {
  data: Landmark[];
  num: number;
  windowWidth: number | null;
}

export default function Group({ data, num, windowWidth }: Props) {
  const [map, setMap] = useState(false);

  return (
    <>
      {map && <MapModal data={data} num={num} setMap={setMap} />}
      <div className="mt-4 pb-4 pl-3 pr-5 border-t">
        <h3 className="text-lg font-medium mt-6">Group {num}</h3>
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
                    :{" "}
                    {windowWidth && windowWidth <= 320
                      ? lm.title_stub
                      : windowWidth && windowWidth >= 1280
                        ? lm.title
                        : lm.title_short}
                  </Link>
                </li>
              ))}
          </ol>
          <p className="pt-1 flex items-center md:text-lg">
            <button onClick={() => setMap(true)} type="button">
              View Group {num} Map
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
