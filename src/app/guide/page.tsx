import Group from "@/components/pages/group/Group";
import MasterMap from "@/components/pages/group/MasterMap";
import { getAllGroups } from "@/data/data";
import type { Landmark } from "@/lib/types";

export default function GuidePage() {
  const groups = getAllGroups();

  return (
    <div className="font-light">
      <div>
        <h1>Sightseeing Guide</h1>
        <p className="mt-2">
          By consulting the text and accompanying maps, you should have no
          trouble locating and visiting all of the City&#39;s 48 State
          Registered Historical Landmarks. Enjoy yourself!
        </p>
      </div>
      <div className="my-6">
        <h2 className="mb-2 pl-3 text-xl font-medium">Map: All Landmarks</h2>
        <p className="pl-3 pr-5 mb-2">
          This map shows the locations of all 48 historical landmarks in San
          Francisco county, with group numbers indicated. Click a marker to view
          name, group, and address information.
        </p>
        <div>
          <MasterMap data={groups as Landmark[]} />
        </div>
      </div>
      <div>
        <h2 className="mb-2 pl-3 text-xl font-medium">Groups</h2>
        <p className="pl-3 pr-5">
          For your convenience, the landmarks have been placed in five
          geographical groups with a suggested sequence for seeing the sites.
        </p>
        <Group num={1} data={groups as Landmark[]} />
        <Group num={2} data={groups as Landmark[]} />
        <Group num={3} data={groups as Landmark[]} />
        <Group num={4} data={groups as Landmark[]} />
        <Group num={5} data={groups as Landmark[]} />
      </div>
    </div>
  );
}
