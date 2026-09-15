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
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  // Get current window size
  useEffect(() => {
    const getWindowSize = () => {
      const { innerWidth } = window;
      setWindowWidth(innerWidth);
    };
    getWindowSize();
  }, []);

  // Get sort method from session storage or set default
  useEffect(() => {
    const sort = sessionStorage.getItem("lmSortMethod") as SortMethod;
    if (!sort) setSortMethod("number");
    else setSortMethod(sort);
  }, []);

  // Sort landmarks list
  // biome-ignore lint/correctness/useExhaustiveDependencies: ignore window width
  useEffect(() => {
    const sortArray = (method: string) => {
      let sorted = [];
      if (method === "number" || method === "group") {
        sorted = [...data].sort((a, b) => a[method] - b[method]);
      } else {
        if (windowWidth && windowWidth <= 320) {
          sorted = [...data].sort((a, b) =>
            a.title_stub.localeCompare(b.title_stub),
          );
        } else if (windowWidth && windowWidth >= 1280) {
          sorted = [...data].sort((a, b) => a.title.localeCompare(b.title));
        } else {
          sorted = [...data].sort((a, b) =>
            a.title_short.localeCompare(b.title_short),
          );
        }
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
