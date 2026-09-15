"use client";

import { useSearchParams } from "next/navigation";
import LandmarksList from "@/components/pages/landmarks/LandmarksList";
import SortLandmarksList from "@/components/pages/landmarks/SortLandmarksList";
import { getSortedLandmarks } from "@/lib/sortLandmarks";

export default function LandmarksPage() {
  const params = useSearchParams();
  const sortParam = params.get("sort");

  const sortedLandmarks = getSortedLandmarks(sortParam);

  return (
    <>
      <h1>Index of Landmarks</h1>
      <SortLandmarksList />
      <LandmarksList sortedLandmarks={sortedLandmarks} />
    </>
  );
}
