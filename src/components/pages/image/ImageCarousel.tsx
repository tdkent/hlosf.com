"use client";

import { A11y, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import type { Dispatch, SetStateAction } from "react";
import CustomImage from "@/components/pages/image/CustomImage";

interface Props {
  initialSlideIdx: number | undefined;
  name: string;
  numImgs: number;
  setInitialSlideIdx: Dispatch<SetStateAction<number>>;
  slug: string;
}

export default function ImageCarousel({
  initialSlideIdx,
  name,
  numImgs,
  setInitialSlideIdx,
  slug,
}: Props) {
  const imgNumArr = Array.from({ length: numImgs }, (_, idx) => idx + 1);
  return (
    <Swiper
      className="my-swiper"
      effect="fade"
      initialSlide={initialSlideIdx}
      modules={[A11y, EffectFade, Navigation]}
      navigation
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
  );
}
