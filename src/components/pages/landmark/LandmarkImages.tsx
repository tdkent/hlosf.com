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

export default function LandmarkImages(props: Props) {
  const [showModal, setShowModal] = useState(false);
  const [initialSlideIdx, setInitialSlideIdx] = useState<number>(0);

  // store controlled swiper instance
  const [controlled, setControlled] = useState<SwiperType | null>(null);

  const carouselProps = {
    setInitialSlideIdx,
    initialSlideIdx,
    ...props,
  };

  return (
    <>
      <ReactModal setShowModal={setShowModal} showModal={showModal}>
        <SwiperCarousel
          controller={{ control: controlled }}
          {...carouselProps}
        />
      </ReactModal>

      <div className="my-4 flex flex-col gap-4">
        <SwiperCarousel
          onSwiper={setControlled}
          sizes="(max-width: 900px) 100vw, 900px"
          {...carouselProps}
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
