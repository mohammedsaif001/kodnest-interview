"use client";

// import LoginFrom from "./loginFrom";
import React, { FormEvent, useEffect, useState } from "react";
// import {
//   login,
//   logout,
//   setAccessToken,
//   setInputError,
// } from "@redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "@/config/redux/store";
import LoginFrom from "@/components/form/LoginForm";
// import useThrowToLogin from "../hooks/useThrowToLogin";

const Login = () => {
  // const { errorMessage, accessToken, authLoading, loginPageState } =
  // useSelector((state: RootState) => state.authReducer);
  // const udateSlice =() => {
  //   setForceChangePin ("")
  // }

  // const { throwOut } = useThrowToLogin();
  // useEffect(() => {
  //   const token = Cookies.get("accessToken");
  //   if (query === null) {
  //     // Initial login

  //     if (accessToken && brandId) {
  //       router.push("/");
  //     } else if (token && brandId) {
  //       router.push("/");
  //       dispatch(setAccessToken(token));
  //     }
  //   } else {
  //     // auth token empty
  //     throwOut();
  //     dispatch(setAccessToken(""));
  //   }
  // }, [accessToken, brandId]);

  return (
    <section
      className="bg-primary-linear-gradient-main w-full h-screen laptop-lg:h-screen flex justify-center items-center flex-col relative px-4
    "
    >
      <div className="flex justify-center items-center gap-4 scale-50 sm:scale-[65%] md:scale-[80%] lg:scale-100">
        <div className="flex gap-7 flex-col xl:flex-row ">
          <div className="w-max h-max">{/* <LandingPageLogo /> */}</div>
          <div className="w-96 flex gap-[0.86rem] flex-col">
            <div className="w-max">
              <p className="text-[#fff]  font-bold uppercase text-5xl">GAME</p>
              <p className="text-[#BBE3F7] font-bold uppercase text-5xl">
                MANAGEMENT
              </p>
              <p className="text-[#fff]  font-bold uppercase text-5xl">
                SYSTEM
              </p>
            </div>
            <div className="text-white text-xs font-prompt ">
              <p>
                Accelerate your growth, increase conversion, retention and
                player value with one of the leading iGaming Platforms in the
                industry.
              </p>
              <p>
                Our PAM is a trusted all-in-one solution, with powerful
                intelligence and marketing tools that ensure your Igaming brands
                run seamlessly and that enable exceptional player experiences
                every step of the way.
              </p>
            </div>
          </div>
        </div>
        <LoginFrom />
      </div>
    </section>
  );
};

export default Login;
