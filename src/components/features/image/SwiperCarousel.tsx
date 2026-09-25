"use client";

import { A11y, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import type { Dispatch, SetStateAction } from "react";
import CustomImage from "@/components/features/image/CustomImage";

interface Props {
  name: string;
  numImgs: number;
  setSlideIdx: Dispatch<SetStateAction<number>>;
  sizes?: string;
  slugs: string[];
}

export default function SwiperCarousel({
  name,
  setSlideIdx,
  sizes,
  slugs,
}: Props) {
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
      {slugs.map((slug) => {
        return (
          <SwiperSlide key={slug} className="justify-center items-center">
            <CustomImage altText={name} sizes={sizes} slug={slug} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
