"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CartModal from "./CartModal";
import Cookies from "js-cookie";
import { useWixClinet } from "@/hook/useWixClient";
import { useCartStore } from "@/hook/useCarStore";

export default function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const pathName = usePathname();

  const wixClient = useWixClinet();
  const isLoggedIn = wixClient.auth.loggedIn();

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };
  //設定 Wix連線
  // const wixClient = useWixClinet()
  // const login =async()=>{
  //   const loginRequestData = wixClient.auth.generateOAuthData(
  //     "http://localhost:3000",
  //     "https://vercel.com/",
  //   );
  //   console.log(loginRequestData)

  //   localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData))
  //   const {authUrl} = await wixClient.auth.getAuthUrl(loginRequestData)
  //   window.location.href = authUrl
  // }
  const handleLogout = async () => {
    setIsLoading(true);
    // 刪除cookie
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl);
  };

  const {cart,counter,getCart} = useCartStore()
  
  useEffect(() => {
    getCart(wixClient)
  }, [wixClient ,getCart]);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        onClick={handleProfile}
        // onClick={login}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,.2)] z-20">
          <Link href="">Profile</Link>
          <div className="mt-2 cursor-pointer" onClick={handleLogout}>
            {isLoading ? "Logging out" : "Logout"}
          </div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center ">
         {counter}
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
}
