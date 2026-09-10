import type { Dispatch, SetStateAction } from "react";
import type { SortMethod } from "@/lib/types";

interface Props {
  setScrollId: Dispatch<SetStateAction<string | null>>;
  setSortMethod: Dispatch<SetStateAction<SortMethod>>;
  sortMethod: SortMethod;
}

export default function SorLandmarksList({
  sortMethod,
  setSortMethod,
  setScrollId,
}: Props) {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value as SortMethod;
    sessionStorage.removeItem("scroll-position-id");
    setScrollId(null);
    sessionStorage.setItem("lmSortMethod", sortValue);
    setSortMethod(sortValue);
  };
  return (
    <div id="landmark-sort" className="my-8 pl-3">
      <form className="flex items-center">
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          value={sortMethod || "number"}
          className="form-select ml-2 rounded-full"
          onChange={handleSelectChange}
        >
          <option value="number">Number</option>
          <option value="title_short">Name</option>
          <option value="group">Group</option>
        </select>
      </form>
    </div>
  );
}
