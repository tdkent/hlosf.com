"use client";

import { A11y, Controller, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import type { Dispatch, SetStateAction } from "react";
import type { Swiper as SwiperType } from "swiper";
import type { ControllerOptions } from "swiper/types";
import CustomImage from "@/components/pages/image/CustomImage";

interface Props {
  controller?: boolean | ControllerOptions;
  initialSlideIdx: number | undefined;
  name: string;
  numImgs: number;
  onSwiper?: Dispatch<SetStateAction<SwiperType | null>>;
  setInitialSlideIdx: Dispatch<SetStateAction<number>>;
  sizes?: string;
  slug: string;
}

export default function SwiperCarousel({
  controller,
  initialSlideIdx,
  name,
  numImgs,
  onSwiper,
  setInitialSlideIdx,
  sizes,
  slug,
}: Props) {
  const imgNumArr = Array.from({ length: numImgs }, (_, idx) => idx + 1);
  return (
    <Swiper
      className="my-swiper"
      controller={controller}
      effect="fade"
      initialSlide={initialSlideIdx}
      lazyPreload={false} // use native lazy loading
      modules={[A11y, Controller, EffectFade, Navigation]}
      navigation
      onNavigationNext={() => setInitialSlideIdx((prev) => ++prev)}
      onNavigationPrev={() => setInitialSlideIdx((prev) => --prev)}
      onSwiper={onSwiper}
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
