import { notFound } from "next/navigation";
import GroupMap from "@/components/pages/group/GroupMap";
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

  return (
    <div>
      <h1>Group {groupId}</h1>
      <p>
        Consult the map and landmarks list below for help locating and visiting
        the Registered Historical Landmarks in Group {groupId}.
      </p>
      <section>
        <h2 className="text-xl font-medium">
          Map: All Landmarks in Group {groupId}
        </h2>
        <GroupMap data={landmarks} num={groupId} />
      </section>
    </div>
  );
}
