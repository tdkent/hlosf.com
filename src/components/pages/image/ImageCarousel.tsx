"use client";

import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CustomImage from "@/components/pages/image/CustomImage";

interface Props {
  name: string;
  numImgs: number;
  slideIdx: number | undefined;
  slug: string;
}

export default function ImageCarousel({
  name,
  numImgs,
  slideIdx,
  slug,
}: Props) {
  const imgNumArr = Array.from({ length: numImgs }, (_, idx) => idx + 1);
  return (
    <Swiper
      navigation
      modules={[A11y, Navigation]}
      className="my-swiper"
      onSwiper={(swiper) => swiper.slideTo(slideIdx ?? 0, 0)}
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
