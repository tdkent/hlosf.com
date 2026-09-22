"use client";

import { useState } from "react";
import CustomImage from "@/components/pages/image/CustomImage";
import ImageCarousel from "@/components/pages/image/ImageCarousel";

interface Props {
  name: string;
  numImgs: number;
  slug: string;
}

export default function LandmarkImages({ name, numImgs, slug }: Props) {
  const [showCarousel, setShowCarousel] = useState(false);

  const imgNumArr = Array.from({ length: numImgs }, (_, idx) => idx + 1);

  return (
    <>
      {showCarousel && <ImageCarousel />}
      <div className="my-4 flex flex-col gap-4">
        {imgNumArr.map((num) => {
          return (
            <button
              key={num}
              onClick={() => setShowCarousel(true)}
              type="button"
            >
              <CustomImage
                altText={name}
                containerStyles="border"
                fetchPriority="low"
                slug={`${slug}-${num}`}
              />
            </button>
          );
        })}
      </div>
    </>
  );
}
