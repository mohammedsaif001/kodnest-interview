"use client";

import React from "react";

import LoginFrom from "@/components/form/LoginForm";

const LandingScreen = () => {
  return (
    <section
      className="bg-primary-linear-gradient-main w-full h-screen laptop-lg:h-screen flex justify-center items-center flex-col relative px-4
    "
    >
      <div className="flex justify-center items-center gap-8 flex-col md:flex-row px-6">
        <div className="md:w-96 justify-center flex gap-[0.86rem] flex-col">
          <div className="w-full flex flex-wrap gap-y-1 justify-center gap-5 md:block scale-75 md:scale-100">
            <p className="text-[#fff]  font-bold uppercase text-5xl">EVENT</p>
            <p className="text-[#BBE3F7] font-bold uppercase text-5xl">
              MANAGEMENT
            </p>
            <p className="text-[#fff]  font-bold uppercase text-5xl">SYSTEM</p>
          </div>
          <div className="text-white text-xs font-prompt hidden md:block">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio obcaecati optio dignissimos eum eveniet consequatur
              cumque magni error ab nisi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              repudiandae nemo officia odit facere eveniet, similique magni
              asperiores neque laudantium.
            </p>
          </div>
        </div>
        <div className="scale-95 md:scale-100">
          <LoginFrom />
        </div>
      </div>
    </section>
  );
};

export default LandingScreen;
