"use client";

import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import Modal from "react-modal";
import ImageCarousel from "@/components/pages/image/ImageCarousel";

interface Props {
  name: string;
  numImgs: number;
  slug: string;
}

Modal.setAppElement("#root");

export default function LandmarkImages({ name, numImgs, slug }: Props) {
  const [currSlideIdx, setCurrSlideIdx] = useState<number>(0);
  const [initialSlideIdx, setInitialSlideIdx] = useState<number>(0);
  const [rootElement, setRootElement] = useState<HTMLDivElement>();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const root = document.querySelector("#root") as HTMLDivElement;
    if (root) setRootElement(root);
  }, []);

  function handleOpenFullscreenClick(idx: number) {
    setCurrSlideIdx(idx);
    setInitialSlideIdx(idx);
    setShowModal(true);
  }

  function handleCloseModalClick() {
    setShowModal(false);
    setInitialSlideIdx(currSlideIdx);
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
          onClick={handleCloseModalClick}
          type="button"
        >
          <VscChromeClose className="size-8 lg:size-9" />
        </button>
        <ImageCarousel
          name={name}
          numImgs={numImgs}
          setInitialSlideIdx={setInitialSlideIdx}
          initialSlideIdx={initialSlideIdx}
          slug={slug}
        />
      </Modal>

      <div className="my-4 flex flex-col gap-4">
        <ImageCarousel
          name={name}
          numImgs={numImgs}
          setInitialSlideIdx={setInitialSlideIdx}
          initialSlideIdx={initialSlideIdx}
          slug={slug}
        />

        <button
          className="w-fit text-base link underline hover:no-underline lg:text-lg"
          onClick={() => handleOpenFullscreenClick(initialSlideIdx)}
          type="button"
        >
          View in fullscreen mode
        </button>
      </div>
    </>
  );
}
