"use client";

import { useState } from "react";
import { PiImageBrokenDuotone } from "react-icons/pi";
import imgSrcSets from "@/lib/image/imgSrcSets";

interface Props {
  altText: string;
  containerStyles?: string;
  fetchPriority?: "high" | "low";
  imgStyles?: string;
  lazyLoading?: "eager" | "lazy";
  sizes?: string;
  slug: string;
}

/** Responsive picture element loads images based on display/device. */
export default function CustomImage({
  altText,
  containerStyles,
  fetchPriority,
  imgStyles,
  lazyLoading = "lazy",
  sizes = "100vw",
  slug,
}: Props) {
  const [error, setError] = useState(false);

  const { avif, jpeg, webp } = imgSrcSets(slug);

  return (
    <div className={containerStyles ?? ""}>
      {error && (
        <div className="border w-full h-full flex items-center justify-center">
          <PiImageBrokenDuotone className="size-8" />
        </div>
      )}
      <picture className={`${error ? "hidden " : ""}`}>
        <source srcSet={avif} sizes={sizes} type="image/avif" />
        <source srcSet={webp} sizes={sizes} type="image/webp" />
        <img
          alt={altText}
          className={imgStyles ?? ""}
          fetchPriority={fetchPriority}
          loading={lazyLoading}
          onError={() => {
            setError(true);
          }}
          sizes={sizes}
          srcSet={jpeg}
        />
      </picture>
    </div>
  );
}
