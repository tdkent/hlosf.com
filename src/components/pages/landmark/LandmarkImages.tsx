import CustomImage from "@/components/pages/image/CustomImage";

interface Props {
  name: string;
  numImgs: number;
  slug: string;
}

export default function LandmarkImages({ name, numImgs, slug }: Props) {
  const imgNumArr = Array.from({ length: numImgs }, (_, idx) => idx + 1);
  console.log(imgNumArr);
  return (
    <section>
      <h2>Images</h2>
      <div>
        {imgNumArr.map((num) => {
          return (
            <CustomImage
              key={num}
              altText={name}
              fetchPriority="low"
              slug={`${slug}-${num}`}
            />
          );
        })}
      </div>
    </section>
  );
}
