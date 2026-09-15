import { notFound } from "next/navigation";
import GroupMap from "@/components/pages/group/GroupMap";
import LandmarksListItem from "@/components/pages/landmarks/LandmarksListItem";
import { getGroupSize } from "@/lib/guide/getGroupSize";
import { getLandmarksByGroupId } from "@/lib/guide/getLandmarksByGroupId";
import { validateGroupId } from "@/lib/guide/validateGroupId";

export default async function GuideGroupPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const groupId = validateGroupId(slug);

  if (!groupId) return notFound();

  const landmarks = getLandmarksByGroupId(groupId);
  const groupSize = getGroupSize(groupId);

  return (
    <div>
      <h1>Group {groupId}</h1>
      <p>
        Please consult the map and text below for help locating and visiting the{" "}
        {groupSize} Registered Historical Landmarks in Group {groupId}.
      </p>
      <section>
        <h2>Map: All Landmarks in Group {groupId}</h2>
        <GroupMap data={landmarks} num={groupId} />
      </section>
      <section>
        <h2>Landmarks in Group {groupId}</h2>
        <ul className="">
          {landmarks.map((landmark) => {
            return <LandmarksListItem key={landmark.id} landmark={landmark} />;
          })}
        </ul>
      </section>
    </div>
  );
}
