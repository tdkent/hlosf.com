"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import SingleLandmark from "@/components/pages/landmark/SingleLandmark";
import { getSingleLandmark } from "@/data/data";
import type { Landmark } from "@/lib/types";

export default function LandmarkPage() {
  const { slug } = useParams<{ slug: string }>();

  const [data, setData] = useState<Landmark | undefined>();

  useEffect(() => {
    const landmarkData = getSingleLandmark(slug);
    setData(landmarkData);
  }, [slug]);

  //! This should be an error
  if (!data) {
    return "loading...";
  }

  //! Format landmark number for metadata
  // if (data.number.toString().includes(".")) {
  //   data.number = data.number.toString().replace(".", "-");
  // }

  return <SingleLandmark data={data} />;
}
