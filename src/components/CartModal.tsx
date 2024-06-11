"use client";

import Image from "next/image";
import React from "react";

export default function CartModal() {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
            <Image
              src="https://images.pexels.com/photos/12220265/pexels-photo-12220265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-between w-full">
              {/* 上方 */}
              <div className="">
                {/* 標題 */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$99</div>
                </div>
                {/* 描述 */}
                <div className="text-sm text-gray-500">描述內容</div>
              </div>
              {/* 下方 */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty.2</span>
                <span className="text-blue-500">刪除</span>
              </div>
            </div>
          </div>
          {/* 多個品項 */}
          <div className="flex gap-4">
            <Image
              src="https://images.pexels.com/photos/12220265/pexels-photo-12220265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-between w-full">
              {/* 上方 */}
              <div className="">
                {/* 標題 */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$99</div>
                </div>
                {/* 描述 */}
                <div className="text-sm">描述內容</div>
              </div>
              {/* 下方 */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty.2</span>
                <span className="text-blue-500">刪除</span>
              </div>
            </div>
            
          </div>
        </div>
        {/* 按鈕 */}
        <div className="">
          <div className="flex items-center justify-between font-semibold">
            <span className="">送出</span>
            <span className="">$99</span>
          </div>
          <p className="text-gray-500 text-sm mt-2 mb-4">
            Lorem ipsum dolor sit, amet consectetur .
          </p>
          <div className="flex justify-between text-sm ">
            <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 ">內容</button>
            <button className="rounded-md py-3 px-4 bg-black text-white">確認</button>
          </div>
        </div>
        </>
      )}
    </div>
  );
}
