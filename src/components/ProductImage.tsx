"use client";

import React, { useState } from "react";
import Image from "next/image";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/20584534/pexels-photo-20584534.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/15503344/pexels-photo-15503344.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/18197843/pexels-photo-18197843.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/7133638/pexels-photo-7133638.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function ProductImage() {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vW"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img,i) => {
          return (
            <div
              className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
              key={img.id}
              onClick={() => setIndex(i)}
            >
              <Image
                src={img.url}
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
