"use client";

import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import Modal from "react-modal";
import CustomImage from "@/components/pages/image/CustomImage";
import ImageCarousel from "@/components/pages/image/ImageCarousel";

interface Props {
  name: string;
  numImgs: number;
  slug: string;
}

Modal.setAppElement("#root");

export default function LandmarkImages({ name, numImgs, slug }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [slideIdx, setSlideIdx] = useState<number>();
  const [rootElement, setRootElement] = useState<HTMLDivElement>();

  useEffect(() => {
    const root = document.querySelector("#root") as HTMLDivElement;
    if (root) setRootElement(root);
  }, []);

  const imgNumArr = Array.from({ length: numImgs }, (_, idx) => idx + 1);

  function handleClick(idx: number) {
    setShowModal(true);
    setSlideIdx(idx);
  }

  return (
    <>
      <Modal
        className="w-full"
        contentLabel="Image Carousel Modal"
        isOpen={showModal}
        onAfterClose={() => rootElement?.removeAttribute("aria-hidden")}
        onRequestClose={() => setShowModal(false)}
        shouldReturnFocusAfterClose
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 20,
          },
          content: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            outline: "none",
          },
        }}
      >
        <button
          aria-label="Close"
          className="fixed top-4 right-2 z-30 cursor-pointer bg-black/50 rounded-full p-1 lg:top-6 lg:right-4"
          onClick={() => setShowModal(false)}
          type="button"
        >
          <VscChromeClose className="size-8 lg:size-9" />
        </button>
        <ImageCarousel
          name={name}
          numImgs={numImgs}
          slideIdx={slideIdx}
          slug={slug}
        />
      </Modal>

      <div className="my-4 flex flex-col gap-4">
        {imgNumArr.map((num, idx) => {
          return (
            <button
              key={num}
              className="cursor-pointer"
              onClick={() => handleClick(idx)}
              type="button"
            >
              <CustomImage
                altText={name}
                containerStyles="border"
                fetchPriority="low"
                slug={`${slug}-${num}`}
              />
            </button>
          );
        })}
      </div>
    </>
  );
}
