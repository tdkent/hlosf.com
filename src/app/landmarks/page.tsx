import type { Metadata } from "next";
import LandmarksList from "@/components/pages/landmarks/LandmarksList";
import SortLandmarksList from "@/components/pages/landmarks/SortLandmarksList";
import { getSortedLandmarks } from "@/lib/landmarks/sortLandmarks";

const title = "Index of Landmarks | Historic Landmarks of San Francisco";

export const metadata: Metadata = {
  title,
  openGraph: {
    description:
      "A guide to the 48 officially designated historical landmarks of California that are located in the city and county of San Francisco, including Union Square, Mission Dolores, and the Presidio.",
    title,
    type: "website",
    url: "https://www.hlosf.com/landmarks",
  },
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
