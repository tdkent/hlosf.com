import type { Metadata } from "next";
import GroupListItem from "@/components/pages/group/GroupListItem";

export const metadata: Metadata = {
  title: "Sightseeing Guide | Historic Landmarks of San Francisco",
};

export default function GuidePage() {
  const groups = Array.from({ length: 5 }, (_, idx) => idx + 1);
  return (
    <>
      <section>
        <h1>Sightseeing Guide</h1>
        <p>
          By consulting the text and accompanying maps, you should have no
          trouble locating and visiting all of the City's 48 California
          Historical Landmarks. Enjoy yourself!
        </p>
      </section>
      <section>
        <h2>Groups</h2>
        <p>
          For your convenience, the landmarks have been placed in five
          geographical groups with a suggested sequence for seeing the sites.
        </p>
        <ul className="my-4">
          {groups.map((groupNum) => {
            return <GroupListItem key={groupNum} groupNum={groupNum} />;
          })}
        </ul>
      </section>
    </>
  );
}
