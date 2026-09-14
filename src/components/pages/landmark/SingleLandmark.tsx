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
    update_html,
    marker_inscription_html,
    marker_onsite,
    dedication_year,
    imgUrls,
    title,
    number,
  } = landmark;

  return (
    <article className="my-8 mx-2">
      <SingleLandmarkInfo landmark={landmark} />
      <div className="pl-3 pr-5 font-light">
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
