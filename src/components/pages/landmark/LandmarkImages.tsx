"use client";

import { useState } from "react";
import CarouselModal from "@/components/pages/image/CarouselModal";
import CustomImage from "@/components/pages/image/CustomImage";

interface Props {
  name: string;
  numImgs: number;
  slug: string;
}

export default function LandmarkImages({ name, numImgs, slug }: Props) {
  const [showModal, setShowModal] = useState(false);

  const imgNumArr = Array.from({ length: numImgs }, (_, idx) => idx + 1);

  return (
    <>
      {showModal && (
        <CarouselModal setShowModal={setShowModal} showModal={showModal} />
      )}
      <div className="my-4 flex flex-col gap-4">
        {imgNumArr.map((num) => {
          return (
            <button key={num} onClick={() => setShowModal(true)} type="button">
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
