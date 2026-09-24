"use client";

import { useState } from "react";
import { A11y, Controller, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import ImageCarousel from "@/components/pages/image/ImageCarousel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import type { Swiper as SwiperType } from "swiper";
import CustomImage from "@/components/pages/image/CustomImage";
import ReactModal from "@/components/ui/ReactModal";

interface Props {
  name: string;
  numImgs: number;
  slug: string;
}

export default function LandmarkImages({ name, numImgs, slug }: Props) {
  // store controlled swiper instance
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(
    null,
  );
  const [showModal, setShowModal] = useState(false);
  const [initialSlideIdx, setInitialSlideIdx] = useState<number>(0);

  const imgNumArr = Array.from({ length: numImgs }, (_, idx) => idx + 1);

  return (
    <>
      <ReactModal setShowModal={setShowModal} showModal={showModal}>
        {/* <ImageCarousel
          name={name}
          numImgs={numImgs}
          setInitialSlideIdx={setInitialSlideIdx}
          initialSlideIdx={initialSlideIdx}
          slug={slug}
        /> */}
        <Swiper
          className="my-swiper"
          effect="fade"
          initialSlide={initialSlideIdx}
          modules={[A11y, Controller, EffectFade, Navigation]}
          navigation
          controller={{ control: controlledSwiper }}
          onNavigationNext={() => setInitialSlideIdx((prev) => ++prev)}
          onNavigationPrev={() => setInitialSlideIdx((prev) => --prev)}
        >
          {imgNumArr.map((num) => {
            return (
              <SwiperSlide key={num} className="justify-center items-center">
                <CustomImage altText={name} slug={`${slug}-${num}`} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ReactModal>

      <div className="my-4 flex flex-col gap-4">
        {/* <ImageCarousel
          name={name}
          numImgs={numImgs}
          setInitialSlideIdx={setInitialSlideIdx}
          initialSlideIdx={initialSlideIdx}
          slug={slug}
        /> */}

        <Swiper
          className="my-swiper"
          effect="fade"
          modules={[A11y, Controller, EffectFade, Navigation]}
          navigation
          onSwiper={setControlledSwiper}
          onNavigationNext={() => setInitialSlideIdx((prev) => ++prev)}
          onNavigationPrev={() => setInitialSlideIdx((prev) => --prev)}
        >
          {imgNumArr.map((num) => {
            return (
              <SwiperSlide key={num} className="justify-center items-center">
                <CustomImage altText={name} slug={`${slug}-${num}`} />
              </SwiperSlide>
            );
          })}
        </Swiper>

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
