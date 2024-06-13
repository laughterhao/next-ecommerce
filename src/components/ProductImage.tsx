"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProductImage({items}:{items:any}) {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vW"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item:any,i:number) => {
          return (
            <div
              className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
              key={item._id}
              onClick={() => setIndex(i)}
            >
              <Image
                src={item.image?.url}
                alt=""
                fill
                sizes="20vW"
                className="object-cover rounded-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
