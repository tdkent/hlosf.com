"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { SortMethod } from "@/lib/types";

export default function SortLandmarksList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currSortParam = searchParams.get("sort");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value as SortMethod;
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortValue);
    router.push(`/landmarks?${params.toString()}`);
  };

  return (
    <div id="landmark-sort" className="my-8">
      <form className="flex items-center">
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          value={currSortParam ?? "number"}
          className="form-select ml-2 rounded-full"
          onChange={handleSelectChange}
        >
          <option value="number">Number</option>
          <option value="title">Name</option>
          <option value="group">Group</option>
        </select>
      </form>
    </div>
  );
}
