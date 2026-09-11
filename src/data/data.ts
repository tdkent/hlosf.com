import landmarkData from "./data.json";

export const allLandmarksReducedData = landmarkData.data.map((lm) => {
  return {
    id: lm.id,
    title: lm.title,
    title_short: lm.title_short,
    title_stub: lm.title_stub,
    number: lm.number,
    group: lm.group,
    slug: lm.slug,
  };
});

export const getSingleLandmark = (slug: string) => {
  const landmark = landmarkData.data.find((lm) => lm.slug === slug);
  return landmark;
};

export const getAllGroups = () => {
  return landmarkData.data.map((lm) => {
    return {
      id: lm.id,
      title: lm.title,
      title_short: lm.title_short,
      title_stub: lm.title_stub,
      number: lm.number,
      group: lm.group,
      group_order: lm.group_order,
      slug: lm.slug,
      marker_coordinates_lat: lm.marker_coordinates_lat,
      marker_coordinates_lng: lm.marker_coordinates_lng,
      marker_address: lm.marker_address,
    };
  });
};
