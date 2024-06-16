"use client";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}

import { useWixClinet } from "@/hook/useWixClient";
import React, { useState } from "react";

export default function LoginPage() {
  const [mode, setMode] = useState(MODE.LOGIN);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setmessage] = useState("");

  const fornTitle =
    mode === MODE.LOGIN
      ? "Log in"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSWORD
      ? "Rest Your Password"
      : "Verify Your Email";

  const buttonTitle =
    mode === MODE.LOGIN
      ? "Log"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSWORD
      ? "Rest"
      : "Verify";
  const wixClient = useWixClinet();
  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 flex items-center justify-center">
      <form action="" className="flex flex-col gap-8">
        <h1 className="text-2xl font-semibold">{fornTitle}</h1>
        {mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm text-gray-700">
              UserName
            </label>
            <input
              type="text"
              name="username"
              placeholder="Nic"
              className="ring-2 ring-gray-300 rounded-md p-4"
            />
          </div>
        ) : null}
        {mode !== MODE.EMAIL_VERIFICATION ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="Nic@gmil.com"
              className="ring-2 ring-gray-300 rounded-md p-4"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm text-gray-700">
              E-mail
            </label>
            <input
              type="text"
              name="emailCode"
              placeholder="Code"
              className="ring-2 ring-gray-300 rounded-md p-4"
            />
          </div>
        )}
        {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm text-gray-700">
              PassWord
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="ring-2 ring-gray-300 rounded-md p-4"
            />
          </div>
        ) : null}
        {mode === MODE.LOGIN && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.RESET_PASSWORD)}
          >
            Forgot PassWord?
          </div>
        )}
        <button
          className="bg-lama text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed "
          disabled={isLoading}
        >
          {isLoading ? "Loading.." : buttonTitle}
        </button>
        {error && <div className="text-red-600">{error}</div>}
        {mode === MODE.LOGIN && (
          <div className="text-sm underline cursor-pointer" onClick={() => setMode(MODE.REGISTER)}>
            {"Don't"} have an account?
          </div>
        )}
        {mode === MODE.REGISTER && (
          <div className="text-sm underline cursor-pointer" onClick={() => setMode(MODE.LOGIN)}>
            Have an account?
          </div>
        )}
        {mode === MODE.RESET_PASSWORD && (
          <div className="text-sm underline cursor-pointer" onClick={() => setMode(MODE.LOGIN)}>
            Go back to Login
          </div>
        )}
        {message && <div className="text-green-600 text-sm">{message}</div>}
      </form>
    </div>
  );
}
