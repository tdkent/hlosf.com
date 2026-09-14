"use client";

import { useState } from "react";
import MapModal from "@/components/ui/MapModal";
import type { Landmark } from "@/lib/types";

interface Props {
  data: Landmark[];
  num: number;
}

export default function ViewMap({ data, num }: Props) {
  const [map, setMap] = useState(false);
  return (
    <>
      {map && <MapModal data={data} num={num} setMap={setMap} />}
      <button onClick={() => setMap(true)} type="button">
        View Group {num} Map
      </button>
    </>
  );
}
