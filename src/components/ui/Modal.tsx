"use client";

import type { Dispatch, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";
import ReactModal from "react-modal";
import { useScrollLock } from "usehooks-ts";

interface Props {
  children: React.ReactNode;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
}

ReactModal.setAppElement("#root");

export default function Modal({ children, setShowModal, showModal }: Props) {
  useScrollLock();
  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
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
      contentLabel="Modal"
      className="w-full"
    >
      <button
        aria-label="Close"
        className="fixed top-2 right-2 z-30 text-xl cursor-pointer lg:top-6 lg:right-6"
        onClick={() => setShowModal(false)}
        type="button"
      >
        <IoMdClose className="fill-accent size-10 lg:size-12" />
      </button>
      {children}
    </ReactModal>
  );
}
