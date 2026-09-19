import Image from "next/image";
import Link from "next/link";
import ImageAttribution from "@/components/pages/landmark/ImageAttribution";
import { config } from "@/lib/config";

interface Props {
  imgUrls: string[];
  lmNum: number;
  name: string;
}

const SingleLandmarkImages = ({ imgUrls, name, lmNum }: Props) => {
  const { cloudinaryFolder, cloudinaryUrl } = config;
  return (
    <div>
      {imgUrls.map((url) => {
        return (
          <div key={url.split("hlsf")[1]}>
            <Link
              href={`${cloudinaryUrl}/q_100${cloudinaryFolder}${
                url.split("hlsf")[1]
              }`}
            >
              <Image
                className="my-4 shadow-md shadow-slate-400 rounded-lg w-150 dark:shadow-none"
                src={`${cloudinaryUrl}/q_70${cloudinaryFolder}${
                  url.split("hlsf")[1]
                }`}
                alt={name}
                width={990}
                height={660}
              />
            </Link>
          </div>
        );
      })}
      <ImageAttribution lmNum={lmNum} />
    </div>
  );
};

export default SingleLandmarkImages;
