"use client";

import { products } from "@wix/stores";
import React, { useEffect, useState } from "react";
import Add from "./Add";

export default function CustomizeProducts({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
  //會有多個陣列 所以須要給他一個空陣列左存放
}) {
  const [selectedOption, setSelectedOption] = useState<{
    [key: string]: string;
  }>({});
  //<{[key:string]:string}> 用於描述一個對象，該對象的屬性名是字符串類型

  const [selectedVariant,setSelectVariant] = useState<products.Variant>()

  useEffect(()=>{
    const variant = variants.find((v)=>{
      const variantChoices = v.choices
      if(!variantChoices) return false
      return Object.entries(selectedOption).every(
        ([key,value])=>variantChoices[key] === value
      )
    })
    setSelectVariant(variant)
  },[selectedOption,variants])
  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOption((prev) => ({ ...prev, [optionType]: choice }));
    //執行setSelectedOption 在原本的物件中在加入新的選項
  };

  const isVariantInstock = (choice: { [key: string]: string }) => {
    return variants.some((variant) => {
      //透過some()去做布琳的檢查 ture & false
      const variantChoices = variant.choices;
      // 把所檢查的值存到variantChoices
      if (!variantChoices) return false;
      //檢查variantChoices 是否有值 沒有就回傳false

      return (
        Object.entries(choice).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };

  console.log(selectedOption);
  return (
    <div className="flex flex-col gap-6 ">
      {productOptions.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium ">選擇{option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices?.map((choice) => {
              const disabled = !isVariantInstock({
                ...selectedOption,
                [option.name!]: choice.description!,
              });

              const select =
                selectedOption[option.name!] === choice.description;

              const clickHandler = disabled
                ? undefined
                : () => handleOptionSelect(option.name!, choice.description!);

              return option.name === "Color" ? (
                <li
                  className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                >
                  {select && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  )}
                </li>
              ) : (
                <li
                  className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer"
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: select
                      ? "#f35c7a"
                      : disabled
                      ? "#FBCFE8"
                      : "white",
                    color: select || disabled ? "white" : "#f35c7a",
                    boxShadow: disabled ? "none" : "",
                  }}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <Add productId={productId} variantId={selectedVariant?._id || '00000000-000000-000000-000000000000'} stockNumber={selectedVariant?.stock?.quantity || 0}/>

      {/* 機型種類 */}
      {/* <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium ">{option.name}選擇</h4>
          <ul className="flex items-center gap-3">
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-600">
              <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-600" />
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-600">
              <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </li>
          </ul>
        </div> */}
      {/* <h4>選擇尺寸</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-lama text-white bg-lama rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
          Large
        </li>
      </ul> */}
    </div>
  );
}
