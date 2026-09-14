import SingleLandmark from "@/components/pages/landmark/SingleLandmark";
import { getSingleLandmark } from "@/data/data";
import type { Landmark } from "@/lib/types";

export default async function LandmarkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  //! This should be an error
  // if (!data) {
  //   return "loading...";
  // }

  //! Format landmark number for metadata
  // if (data.number.toString().includes(".")) {
  //   data.number = data.number.toString().replace(".", "-");
  // }

  // return <SingleLandmark data={data} />;
}
