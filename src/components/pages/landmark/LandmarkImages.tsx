"use client";

import { useState } from "react";
import SwiperCarousel from "@/components/pages/image/SwiperCarousel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import type { Swiper as SwiperType } from "swiper";
import ReactModal from "@/components/ui/ReactModal";

interface Props {
  name: string;
  numImgs: number;
  slug: string;
}

export default function LandmarkImages({ name, numImgs, slug }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [initialSlideIdx, setInitialSlideIdx] = useState<number>(0);

  // store controlled swiper instance
  const [controlled, setControlled] = useState<SwiperType | null>(null);

  return (
    <>
      <ReactModal setShowModal={setShowModal} showModal={showModal}>
        <SwiperCarousel
          controller={{ control: controlled }}
          name={name}
          numImgs={numImgs}
          setInitialSlideIdx={setInitialSlideIdx}
          initialSlideIdx={initialSlideIdx}
          slug={slug}
        />
      </ReactModal>

      <div className="my-4 flex flex-col gap-4">
        <SwiperCarousel
          initialSlideIdx={initialSlideIdx}
          name={name}
          numImgs={numImgs}
          onSwiper={setControlled}
          setInitialSlideIdx={setInitialSlideIdx}
          slug={slug}
        />

        <button
          className="w-fit text-base link underline hover:no-underline lg:text-lg"
          onClick={() => setShowModal(true)}
          type="button"
        >
          View in fullscreen mode
        </button>
      </div>
    </>
  );
}
