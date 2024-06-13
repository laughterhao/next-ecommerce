// "use client";

import React, { Suspense, useContext, useEffect } from "react";
import Slider from "@/components/Slider";
import Product from "@/components/ProductList";
import CategoryList from "@/components/CategoryList";
import { WixClientContext } from "@/context/wixContext";
import { useWixClinet } from "@/hook/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";

const HomePage = async () => {
  // const wixClient = useWixClinet()

  // useEffect(() => {
  //   const getProducts = async () => {
  //
  //     console.log(res)
  //   };
  //   getProducts();
  // }, [wixClient]);

  // const wixClient = await wixClientServer()
  // const res = await wixClient.products.queryProducts().find();

  // console.log(res)
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"loading"}>
          <Product
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">
          Categorie
        </h1>
        <Suspense fallback={"loading"}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        {/* <Product /> */}
      </div>
    </div>
  );
};
export default HomePage;
