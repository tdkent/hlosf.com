import Link from "next/link";

interface Props {
  id: number;
  slug: string;
}

const LandmarkLink = ({ id, slug }: Props) => {
  const selectHandler = () => {
    sessionStorage.setItem("scroll-position-id", `${id}`);
  };
  return (
    <div className="ml-3 mr-1 md:mr-4 xl:mr-0">
      <Link href={`/landmarks/${slug}`} onClick={selectHandler}>
        View
      </Link>
    </div>
  );
};

export default LandmarkLink;
