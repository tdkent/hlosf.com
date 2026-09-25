import Link from "next/link";
import LandmarkImages from "@/components/pages/landmark/LandmarkImages";
import ParsedHtml from "@/components/pages/landmark/ParsedHtml";
import GoogleMap from "@/components/pages/maps/GoogleMap";
import { updateComplexLmNumber } from "@/lib/landmarks/updateComplexLmNumber";
import type { Landmark } from "@/lib/types";

interface Props {
  landmark: Landmark;
}

export default function SingleLandmark({ landmark }: Props) {
  const {
    description,
    group,
    address,
    markerText,
    hasMarker,
    dedicationYear,
    name,
    numImgs,
    number,
    slug,
    update_html,
  } = landmark;

  return (
    <article>
      <header>
        <div className="flex flex-col gap-1">
          <h1>{name}</h1>
          <p className="text-xl font-medium text-foreground-secondary sm:text-2xl lg:text-3xl">
            Landmark No. {updateComplexLmNumber(number)}
          </p>
        </div>
        <dl className="flex flex-col gap-4 my-8 border-y py-4">
          {dedicationYear && (
            <div>
              <dt className="uppercase text-sm">Year Dedicated</dt>
              <dd className="font-light">{dedicationYear}</dd>
            </div>
          )}
          <div>
            <dt className="uppercase text-sm">Location</dt>
            <dd>{address}</dd>
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
        <h2>History & Description{number <= 861 && " (1976)"}</h2>
        <ParsedHtml htmlContent={description} />
      </section>
      {update_html && (
        <section>
          <h2>Update (2020)</h2>
          <ParsedHtml htmlContent={update_html} />
        </section>
      )}
      <section>
        <h2>Marker Inscription</h2>
        <ParsedHtml htmlContent={markerText} styles="italic" />
        {!hasMarker && (
          <p className="my-2 bg-background-secondary border p-4">
            Note: there is presently no state marker on site. Inscription
            provided by the Office of Historic Preservation, CA State Parks.
          </p>
        )}
      </section>
      <section>
        <h2>Map</h2>
        <div className="my-4">
          {/* <GoogleMap landmark={landmark} variant="single" /> */}
        </div>
      </section>
      {numImgs ? (
        <section>
          <h2>Images</h2>
          <LandmarkImages name={name} numImgs={numImgs} slug={slug} />
        </section>
      ) : null}
    </article>
  );
}
