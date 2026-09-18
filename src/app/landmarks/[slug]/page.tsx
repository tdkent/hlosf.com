import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SingleLandmark from "@/components/pages/landmark/SingleLandmark";
import { getSingleLandmark } from "@/lib/landmarks/getSingleLandmark";
import { updateComplexLmNumber } from "@/lib/landmarks/updateComplexLmNumber";
import type { Landmark } from "@/lib/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const landmark = getSingleLandmark(slug) as Landmark | undefined;

  if (!landmark) {
    return {
      title: "Page Not Found | Historic Landmarks of San Francisco",
    };
  }

  const { address, name, number } = landmark;

  const title = `${name} | Historic Landmarks of San Francisco`;
  const description = `History, description, map, and images of ${name}, California Historical Landmark No. ${updateComplexLmNumber(number)}, located at ${address}.`;

  return {
    title,
    description,
    openGraph: {
      description,
      title,
      type: "website",
      url: `https://www.hlosf.com/landmarks/${slug}`,
    },
  };
}

export default async function LandmarkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const landmark = getSingleLandmark(slug) as Landmark | undefined;

  if (!landmark) notFound();

  return <SingleLandmark landmark={landmark} />;
}
