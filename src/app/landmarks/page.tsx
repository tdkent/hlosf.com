"use client";

import { useEffect, useState } from "react";
import LandmarksList from "@/components/pages/landmarks/LandmarksList";
import SortLandmarksList from "@/components/pages/landmarks/SortLandmarksList";
import { allLandmarksReducedData } from "@/data/data";
import type { Landmark, SortMethod } from "@/lib/types";

export default function LandmarksPage() {
  const data = allLandmarksReducedData as Landmark[];
  const [sortMethod, setSortMethod] = useState<SortMethod>("number");
  const [sortedData, setSortedData] = useState<Landmark[]>([]);

  // Get sort method from session storage or set default
  useEffect(() => {
    const sort = sessionStorage.getItem("lmSortMethod") as SortMethod;
    if (!sort) setSortMethod("number");
    else setSortMethod(sort);
  }, []);

  // Sort landmarks list
  useEffect(() => {
    const sortArray = (method: string) => {
      let sorted = [];

      if (method === "number" || method === "group") {
        sorted = [...data].sort((a, b) => a[method] - b[method]);
      } else {
        sorted = [...data].sort((a, b) => a.title.localeCompare(b.title));
      }

      setSortedData(sorted);
    };
    sortArray(sortMethod);
  }, [sortMethod]);

  return (
    <>
      <h1>Index of Landmarks</h1>
      <SortLandmarksList
        sortMethod={sortMethod}
        setSortMethod={setSortMethod}
      />
      <LandmarksList sortedLandmarks={sortedData} />
    </>
  );
}
