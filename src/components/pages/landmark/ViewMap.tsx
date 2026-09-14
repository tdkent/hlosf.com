"use client";

import { useState } from "react";
import MapModal from "@/components/ui/MapModal";
import type { Landmark } from "@/lib/types";

interface Props {
  landmark: Landmark;
}

export default function ViewMap({ landmark }: Props) {
  const [map, setMap] = useState(false);
  return (
    <>
      {map && <MapModal data={landmark} setMap={setMap} />}
      <button onClick={() => setMap(true)} type="button">
        View Map
      </button>
    </>
  );
}
