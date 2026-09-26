"use client";

import { A11y, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomImage from "@/components/features/image/CustomImage";
import type { Landmark } from "@/lib/types";
import "swiper/css";
import "swiper/css/effect-fade";

const landmarks: Pick<Landmark, "id" | "name" | "slug">[] = [
  { id: 1, name: "The Conservancy", slug: "the-conservatory-2" },
  { id: 2, name: "Sherman's Bank", slug: "shermans-bank-1" },
  {
    id: 3,
    name: "Sarcophagus of Thomas Starr King",
    slug: "sarcophagus-of-thomas-starr-king-2",
  },
  {
    id: 4,
    name: "Presidio of San Francisco",
    slug: "presidio-of-san-francisco-1",
  },
  { id: 5, name: "The Conservancy", slug: "the-conservatory-1" },
  {
    id: 6,
    name: "Site of First US Branch Mint in California",
    slug: "site-of-first-us-branch-mint-in-california-2",
  },
];

export default function SplashCarousel() {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      className="my-swiper"
      effect="fade"
      lazyPreload={false} // use native lazy loading
      modules={[A11y, Autoplay, EffectFade]}
    >
      {landmarks.map(({ id, name, slug }) => {
        return (
          <SwiperSlide key={id} className="justify-center items-center">
            <CustomImage
              altText={name}
              fetchPriority="high"
              lazyLoading="eager"
              sizes="(max-width: 900px) 100vw, 900px"
              slug={slug}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
