import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImage from "@/components/ProductImage";
import React from "react";

export default function SinglePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* 圖片 */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImage />
      </div>
      {/* 文字 */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">產品名稱</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
          itaque at rem quo distinctio iure adipisci laboriosam! Ducimus earum
          et recusandae id iste neque quam omnis optio fuga, sint voluptate.
        </p>
        <div className="h-[2px] bg-gray-100"></div>
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$109</h3>
          <h2 className="font-medium text-2xl">$89</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">標題</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            debitis incidunt quia laudantium totam sit expedita quisquam ipsam
            asperiores qui recusandae, numquam aliquid inventore. Sunt,
            dignissimos! Cum dicta saepe aperiam!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">標題</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            debitis incidunt quia laudantium totam sit expedita quisquam ipsam
            asperiores qui recusandae, numquam aliquid inventore. Sunt,
            dignissimos! Cum dicta saepe aperiam!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">標題</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            debitis incidunt quia laudantium totam sit expedita quisquam ipsam
            asperiores qui recusandae, numquam aliquid inventore. Sunt,
            dignissimos! Cum dicta saepe aperiam!
          </p>
        </div>
      </div>
    </div>
  );
}
