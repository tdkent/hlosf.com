"use client";

import { A11y, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import type { Dispatch, SetStateAction } from "react";
import CustomImage from "@/components/pages/image/CustomImage";

interface Props {
  name: string;
  numImgs: number;
  setSlideIdx: Dispatch<SetStateAction<number>>;
  sizes?: string;
  slug: string;
}

export default function SwiperCarousel({
  name,
  numImgs,
  setSlideIdx,
  sizes,
  slug,
}: Props) {
  const imgNumArr = Array.from({ length: numImgs }, (_, idx) => idx + 1);
  return (
    <Swiper
      className="my-swiper"
      effect="fade"
      lazyPreload={false} // use native lazy loading
      modules={[A11y, EffectFade, Navigation]}
      navigation
      onNavigationNext={() => setSlideIdx((prev) => ++prev)}
      onNavigationPrev={() => setSlideIdx((prev) => --prev)}
    >
      {imgNumArr.map((num) => {
        return (
          <SwiperSlide key={num} className="justify-center items-center">
            <CustomImage altText={name} sizes={sizes} slug={`${slug}-${num}`} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
