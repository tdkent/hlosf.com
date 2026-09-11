import type { Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom";
import Backdrop from "@/components/ui/Backdrop";
import type { Landmark } from "@/lib/types";

interface Props {
  data: Landmark;
  setMap: Dispatch<SetStateAction<boolean>>;
}

const MapModalContent = (props: Props) => {
  const content = (
    <div
      id="modal"
      // aria-modal="true"
      // aria-labelledby="landmark-name"
      className="fixed top-4 min-[375px]:top-16 md:top-20 w-full xl:w-4/5 xl:left-[10%] 2xl:w-1/2 2xl:left-[25%] 2xl:top-32 bg-white z-50 rounded-lg"
    >
      {/* <div className="py-1">
        <h2
          id="landmark-name"
          className="px-2 flex items-center justify-center"
        >
          Map:{" "}
          {!props.data.length
            ? `${props.data.title_stub} (${props.data.number})`
            : `Group ${props.num}`}
        </h2>
      </div>
      {!props.data.length ? (
        <SingleLandmarkMap {...props} />
      ) : (
        <GroupMap {...props} />
      )}
      <CloseButton
        controls={"modal"}
        closeClickHandler={() => props.setMap(false)}
      /> */}
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
