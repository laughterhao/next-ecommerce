"use client";

import React, { useContext, useEffect } from "react";
import Slider from "@/components/Slider";
import Product from "@/components/ProductList";
import CategoryList from "@/components/CategoryList";
import { WixClientContext } from "@/context/wixContext";
import { useWixClinet } from "@/hook/useWixClient";

export default function HomePage() {
  const wixClient = useWixClinet()

  useEffect(() => {
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();
      console.log(res)
    };
    getProducts();
  }, [wixClient]);
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Product />
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">
          Categorie
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <Product />
      </div>
    </div>
  );
}
