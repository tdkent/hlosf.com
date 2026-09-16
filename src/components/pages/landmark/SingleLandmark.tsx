import Link from "next/link";
import ParsedHtml from "@/components/pages/landmark/ParsedHtml";
import SingleLandmarkImages from "@/components/pages/landmark/SingleLandmarkImages";
import SingleLandmarkInfo from "@/components/pages/landmark/SingleLandmarkInfo";
import SingleLandmarkMarker from "@/components/pages/landmark/SingleLandmarkMarker";
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
          <p className="text-xl font-medium text-foreground-secondary sm:text-2xl lg:text-3xl">
            Landmark No. {number}
          </p>
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
      <section>
        <h2>History & Description</h2>
        <ParsedHtml htmlContent={description_html} />
      </section>
      {update_html && (
        <section>
          <h2>Update (2020)</h2>
          <ParsedHtml htmlContent={update_html} />
        </section>
      )}
      <div>
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
