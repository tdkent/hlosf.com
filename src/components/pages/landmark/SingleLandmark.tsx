import SingleLandmarkInfo from "@/components/pages/landmark/SingleLandmarkInfo";
import type { Landmark } from "@/lib/types";

// import SingleLandmarkDesc from "./SingleLandmarkDesc";
// import SingleLandmarkImages from "./SingleLandmarkImages";
// import SingleLandmarkMarker from "./SingleLandmarkMarker";
// import SingleLandmarkUpdate from "./SingleLandmarkUpdate";

interface Props {
  data: Landmark;
}

export default function SingleLandmark({ data }: Props) {
  return (
    <article className="my-8 mx-2">
      <SingleLandmarkInfo data={data} />
      <div className="pl-3 pr-5 font-light">
        {/* <SingleLandmarkDesc descText={data.description_html} />
        {data.update_html && (
          <SingleLandmarkUpdate updateText={data.update_html} />
        )}
        <SingleLandmarkMarker
          markerText={data.marker_inscription_html}
          markerOnSite={data.marker_onsite}
          markerYear={data.dedication_year}
        />
        {data.imgUrls.length ? (
          <SingleLandmarkImages
            imgUrls={data.imgUrls}
            title={data.title}
            lmNum={data.number}
          />
        ) : null} */}
      </div>
    </article>
  );
}
