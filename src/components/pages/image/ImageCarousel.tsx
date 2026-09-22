"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CustomImage from "@/components/pages/image/CustomImage";

interface Props {
  name: string;
  numImgs: number;
  slug: string;
}

export default function ImageCarousel({ name, numImgs, slug }: Props) {
  const imgNumArr = Array.from({ length: numImgs }, (_, idx) => idx + 1);
  return (
    <Swiper navigation={true} modules={[Navigation]}>
      {imgNumArr.map((num) => {
        return (
          <SwiperSlide key={num}>
            <CustomImage altText={name} slug={`${slug}-${num}`} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
