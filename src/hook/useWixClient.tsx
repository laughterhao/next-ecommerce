"use client";

import { WixClientContext } from "@/context/wixContext";
import { useContext } from "react";

export const useWixClinet = () => {
  return useContext(WixClientContext);
};
