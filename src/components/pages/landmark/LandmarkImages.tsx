"use client";

import { useState } from "react";
import CustomImage from "@/components/pages/image/CustomImage";
import ImageCarousel from "@/components/pages/image/ImageCarousel";
import Modal from "@/components/ui/Modal";

interface Props {
  name: string;
  numImgs: number;
  slug: string;
}

export default function LandmarkImages({ name, numImgs, slug }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [slideIdx, setSlideIdx] = useState<number>();

  const imgNumArr = Array.from({ length: numImgs }, (_, idx) => idx + 1);

  function handleClick(idx: number) {
    setShowModal(true);
    setSlideIdx(idx);
  }

  return (
    <>
      {showModal && (
        <Modal setShowModal={setShowModal} showModal={showModal}>
          <ImageCarousel
            name={name}
            numImgs={numImgs}
            slideIdx={slideIdx}
            slug={slug}
          />
        </Modal>
      )}
      <div className="my-4 flex flex-col gap-4">
        {imgNumArr.map((num, idx) => {
          return (
            <button
              key={num}
              className="cursor-pointer"
              onClick={() => handleClick(idx)}
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
