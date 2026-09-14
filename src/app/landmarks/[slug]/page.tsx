import { notFound } from "next/navigation";
import SingleLandmark from "@/components/pages/landmark/SingleLandmark";
import { getSingleLandmark } from "@/lib/getSingleLandmark";
import type { Landmark } from "@/lib/types";

export default async function LandmarkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const landmark = getSingleLandmark(slug) as Landmark | undefined;

  if (!landmark) notFound();

  //! Format landmark number for metadata
  // if (data.number.toString().includes(".")) {
  //   data.number = data.number.toString().replace(".", "-");
  // }

  return <SingleLandmark landmark={landmark} />;
}
