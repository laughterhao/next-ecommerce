"use client";

import { useCartStore } from "@/hook/useCarStore";
import Image from "next/image";
import { media as wixMedia } from "@wix/sdk";
import { useWixClinet } from "@/hook/useWixClient";

export default function CartModal() {
  const wixClient = useWixClinet();
  const { cart, isLoading, removeItem } = useCartStore();

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cart.lineItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <div className="flex flex-col gap-8">
            {cart.lineItems.map((item) => (
              <div className="flex gap-4" key={item._id}>
                {item.image && (
                  <Image
                    src={wixMedia.getScaledToFillImageUrl(
                      item.image,
                      72,
                      96,
                      {}
                    )}
                    alt=""
                    width={72}
                    height={96}
                    className="object-cover rounded-md"
                  />
                )}
                <div className="flex flex-col justify-between w-full">
                  {/* 上方 */}
                  <div className="">
                    {/* 標題 */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">
                        {item.productName?.original}
                      </h3>
                      <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                        {item.quantity && item.quantity > 1 && <div className="text-sm text-green-500"> x{item.quantity}</div>}${item.price?.amount}
                      </div>
                    </div>
                    {/* 描述 */}
                    <div className="text-sm text-gray-500">
                      {item.availability?.status}
                    </div>
                  </div>
                  {/* 下方 */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty.{item.quantity}</span>
                    <span
                      className="text-blue-500 cursor-pointer"
                      style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                      onClick={() => removeItem(wixClient, item._id!)}
                    >
                      刪除
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* 按鈕 */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">總金額</span>
              <span className="">${cart.subtotal.amount}</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Lorem ipsum dolor sit, amet consectetur .
            </p>
            <div className="flex justify-between text-sm ">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 ">
                購物車內容
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled::opacity-75" disabled={isLoading}>
                結帳
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
