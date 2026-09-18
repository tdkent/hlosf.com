import type { Metadata } from "next";
import LandmarksList from "@/components/pages/landmarks/LandmarksList";
import SortLandmarksList from "@/components/pages/landmarks/SortLandmarksList";
import { getSortedLandmarks } from "@/lib/landmarks/sortLandmarks";

export const metadata: Metadata = {
  title: "Index of Landmarks | Historic Landmarks of San Francisco",
};

export default async function LandmarksPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { sort } = await searchParams;
  const sortedLandmarks = getSortedLandmarks(sort);

  return (
    <>
      <h1>Index of Landmarks</h1>
      <SortLandmarksList />
      <LandmarksList sortedLandmarks={sortedLandmarks} />
    </>
  );
}
