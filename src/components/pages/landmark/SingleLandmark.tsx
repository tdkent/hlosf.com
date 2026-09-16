import Link from "next/link";
import SingleLandmarkDesc from "@/components/pages/landmark/SingleLandmarkDesc";
import SingleLandmarkImages from "@/components/pages/landmark/SingleLandmarkImages";
import SingleLandmarkInfo from "@/components/pages/landmark/SingleLandmarkInfo";
import SingleLandmarkMarker from "@/components/pages/landmark/SingleLandmarkMarker";
import SingleLandmarkUpdate from "@/components/pages/landmark/SingleLandmarkUpdate";
import type { Landmark } from "@/lib/types";

interface Props {
  landmark: Landmark;
}

export default function SingleLandmark({ landmark }: Props) {
  const {
    description_html,
    group,
    marker_address,
    marker_inscription_html,
    marker_onsite,
    dedication_year,
    imgUrls,
    title,
    number,
    update_html,
  } = landmark;

  return (
    <article>
      <header>
        <div className="flex flex-col gap-1">
          <h1>{title}</h1>
          <h2 className="text-foreground-secondary">Landmark No. {number}</h2>
        </div>
        <dl className="flex flex-col gap-4 my-8 border-y py-4">
          {dedication_year && (
            <div>
              <dt className="uppercase text-sm">Year Dedicated</dt>
              <dd className="font-light">{dedication_year}</dd>
            </div>
          )}
          <div>
            <dt className="uppercase text-sm">Location</dt>
            <dd>{marker_address}</dd>
          </div>
          <div>
            <dt className="uppercase text-sm">Sightseeing Group</dt>
            <dd>
              <Link
                href={`/guide/group-${group}`}
                className="underline link hover:no-underline"
              >
                Group {group}
              </Link>
            </dd>
          </div>
        </dl>
      </header>
      {/* <SingleLandmarkInfo landmark={landmark} /> */}
      <div className="pl-3 pr-5">
        <SingleLandmarkDesc descText={description_html} />
        {update_html && <SingleLandmarkUpdate updateText={update_html} />}
        <SingleLandmarkMarker
          markerText={marker_inscription_html}
          markerOnSite={marker_onsite}
          markerYear={dedication_year}
        />
        {imgUrls.length ? (
          <SingleLandmarkImages
            imgUrls={imgUrls}
            title={title}
            lmNum={number}
          />
        ) : null}
      </div>
    </article>
  );
}
