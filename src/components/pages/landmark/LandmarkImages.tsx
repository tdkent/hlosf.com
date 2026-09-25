"use client";

import { useState } from "react";
import SwiperCarousel from "@/components/features/image/SwiperCarousel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useScrollLock } from "usehooks-ts";
import CustomImage from "@/components/features/image/CustomImage";
import ReactModal from "@/components/ui/ReactModal";

interface Props {
  name: string;
  numImgs: number;
  slug: string;
}

export default function LandmarkImages({ name, numImgs, slug }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [slideIdx, setSlideIdx] = useState<number>(0);

  const { lock, unlock } = useScrollLock({
    autoLock: false,
  });

  function handleClick() {
    setShowModal(true);
    lock();
  }

  const imgNumArr = Array.from({ length: numImgs }, (_, idx) => idx + 1);
  const slugs = imgNumArr.map((num) => `${slug}-${num}`);

  return (
    <>
      <ReactModal
        setShowModal={setShowModal}
        showModal={showModal}
        unlock={unlock}
      >
        <CustomImage
          altText={name}
          imgStyles="w-screen h-screen object-contain"
          slug={`${slug}-${slideIdx + 1}`}
        />
      </ReactModal>

      <div className="my-4 flex flex-col gap-4">
        <SwiperCarousel
          name={name}
          numImgs={numImgs}
          setSlideIdx={setSlideIdx}
          slugs={slugs}
          sizes="(max-width: 900px) 100vw, 900px"
        />

        <button
          className="w-fit text-base link underline hover:no-underline lg:text-lg"
          onClick={handleClick}
          type="button"
        >
          View image in fullscreen
        </button>
      </div>
    </>
  );
}
