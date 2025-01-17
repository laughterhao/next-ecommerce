import React, { Suspense } from "react";
import Image from "next/image";
import Fillter from "@/components/Fillter";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();

  const response = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/* CAMPAING */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grad up to 50% off on <br /> Selectde Products
          </h1>
          <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
            立即購買
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* 收尋功能 */}
      <Fillter />
      {/* 產品清單 */}
      <h1 className="mt-12 text-xl font-semibold">{response?.collection?.name} For You!</h1>
      <Suspense>
        <ProductList categoryId={response.collection?._id || '00000000-000000-000000-000000000001'} searchParams={searchParams}/>
      </Suspense>
    </div>
  );
};
export default ListPage;
