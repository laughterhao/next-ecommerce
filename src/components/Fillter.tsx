"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

export default function Fillter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  //透過 pathname,searchParams 變更網域名稱

 const handleFilterChange=(e:React.ChangeEvent<HTMLSelectElement | HTMLInputElement>)=>{
   const {name,value }=e.target
   //取得select&input的值
   const params = new URLSearchParams(searchParams)
   params.set(name,value)
   replace(`${pathname}?${params.toString()}`)
 } 
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex flex-wrap gap-6">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min Price"
          id=""
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max Price"
          id=""
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <select
          name="cat"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Category</option>
          <option value="Physical">New Arrival</option>
          <option value="Digital">Popular</option>
        </select>
        <select
          name="cat"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>All Fillter</option>
        </select>
      </div>
      <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc price">Price(low to high)</option>
          <option value="desc price">Price(high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
}
