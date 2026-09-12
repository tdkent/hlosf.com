import type { Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom";

interface Props {
  setMap: Dispatch<SetStateAction<boolean>>;
}

export default function Backdrop({ setMap }: Props) {
  return ReactDOM.createPortal(
    <button
      className="fixed top-0 left-0 w-full min-h-full bg-black z-20 opacity-80"
      onClick={() => setMap(false)}
      type="button"
    ></button>,
    document.getElementById("backdrop-hook") as HTMLElement,
  );
}
