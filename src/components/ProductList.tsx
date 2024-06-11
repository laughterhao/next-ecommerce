import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Product() {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/12220265/pexels-photo-12220265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/20697751/pexels-photo-20697751.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-mediun">產品名稱</span>
          <span className="font-semibold">$99</span>
        </div>
        <div className="text0sm text-gray-500">產品描述</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">加入購物車</button>
      </Link>
      <Link href="" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/12220265/pexels-photo-12220265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/20697751/pexels-photo-20697751.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-mediun">產品名稱</span>
          <span className="font-semibold">$99</span>
        </div>
        <div className="text0sm text-gray-500">產品描述</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">加入購物車</button>
      </Link>
      <Link href="" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/12220265/pexels-photo-12220265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/20697751/pexels-photo-20697751.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-mediun">產品名稱</span>
          <span className="font-semibold">$99</span>
        </div>
        <div className="text0sm text-gray-500">產品描述</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">加入購物車</button>
      </Link>
      <Link href="" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/12220265/pexels-photo-12220265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/20697751/pexels-photo-20697751.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-mediun">產品名稱</span>
          <span className="font-semibold">$99</span>
        </div>
        <div className="text0sm text-gray-500">產品描述</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">加入購物車</button>
      </Link>
    </div>
  );
}
