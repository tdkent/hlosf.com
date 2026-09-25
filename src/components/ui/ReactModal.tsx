"use client";

import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import Modal from "react-modal";
import { useScrollLock } from "usehooks-ts";

interface Props {
  children: React.ReactNode;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
}

Modal.setAppElement("#root");

export default function ReactModal({
  children,
  setShowModal,
  showModal,
}: Props) {
  const [rootElement, setRootElement] = useState<HTMLDivElement>();

  useEffect(() => {
    const root = document.querySelector("#root") as HTMLDivElement;
    if (root) setRootElement(root);
  }, []);

  useScrollLock();

  return (
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
      {children}
    </Modal>
  );
}
