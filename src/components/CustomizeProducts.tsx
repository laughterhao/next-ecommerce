import React from "react";

export default function CustomizeProducts() {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium ">選擇顏色</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-600">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-600"/>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-600">
        <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </li>
      </ul>
      <h4>選擇尺寸</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer">Small</li>
        <li className="ring-1 ring-lama text-white bg-lama rounded-md py-1 px-4 text-sm cursor-pointer">Medium</li>
        <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">Large</li>
      </ul>
    </div>
  );
}
