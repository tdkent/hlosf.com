import CustomImage from "@/components/pages/image/CustomImage";

interface Props {
  name: string;
  numImgs: number;
  slug: string;
}

export default function LandmarkImages({ name, numImgs, slug }: Props) {
  const imgNumArr = Array.from({ length: numImgs }, (_, idx) => idx + 1);
  return (
    <section>
      <h2>Images</h2>
      <div className="my-4 flex flex-col gap-4">
        {imgNumArr.map((num) => {
          return (
            <CustomImage
              key={num}
              altText={name}
              containerStyles="border"
              fetchPriority="low"
              slug={`${slug}-${num}`}
            />
          );
        })}
      </div>
    </section>
  );
}
