import type { Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom";
import { FaWindowClose } from "react-icons/fa";
import GroupMap from "@/components/pages/group/GroupMap";
import SingleLandmarkMap from "@/components/pages/landmark/SingleLandmarkMap";
import Backdrop from "@/components/ui/Backdrop";
import type { Landmark } from "@/lib/types";

interface Props {
  data: Landmark | Landmark[];
  num?: number;
  setMap: Dispatch<SetStateAction<boolean>>;
}

const MapModalContent = ({ data, num, setMap }: Props) => {
  const content = (
    <div
      id="modal"
      aria-modal="true"
      aria-labelledby="landmark-name"
      className="fixed top-4 min-[375px]:top-16 md:top-20 w-full xl:w-4/5 xl:left-[10%] 2xl:w-1/2 2xl:left-[25%] 2xl:top-32 bg-white z-50 rounded-lg"
      role="dialog"
    >
      <div className="py-1">
        <h2
          id="landmark-name"
          className="px-2 flex items-center justify-center"
        >
          Map:{" "}
          {Array.isArray(data)
            ? `Group ${num}`
            : `${data.title_stub} (${data.number})`}
        </h2>
      </div>
      {Array.isArray(data) ? (
        <GroupMap data={data} num={num as number} />
      ) : (
        <SingleLandmarkMap data={data} />
      )}
      <div className="py-4">
        <button
          aria-controls="modal"
          className="flex items-center mx-auto text-red-700"
          onClick={() => setMap(false)}
          type="button"
        >
          <FaWindowClose className="mr-1 fill-red-700" />
          Close Window
        </button>
      </div>
    </div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("modal-hook") as HTMLElement,
  );
};

export default function MapModal(props: Props) {
  return (
    <>
      <Backdrop setMap={props.setMap} />
      <MapModalContent {...props} />
    </>
  );
}
