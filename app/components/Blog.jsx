"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-[#fbf9fa] mt-4">
      <div id="blogs" className="w-full h-auto text-center">
        <div className="text-bold text-2xl text-center justify-center lg:text-4xl md:text-4xl">
          <br></br>
          <span className="text-[#4ab9cf]">{t("blog")} & </span>
          <span className="text-[#4ab9cf] ">{t("insight")}</span>
          <p className="pb-2  mt-2 mb-2 text-2xl  text-[#ff6a00] text-bold ">
            {" "}
            <span className="text-[#fd7062]">{t("news")}</span>
          </p>
        </div>
        <div className="ml-4 mr-4 mb-12 grid grid-cols md:grid-cols-2  sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            className="relative group shadow-gray-600 overflow-hidden  ml-2 mr-2 
           transition hover:shadow 
           ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 
           hover:duration-300 bg-white text-[#1f425d] hover:bg-[#1f425d]
            hover:text-white lg:h-90 md:h-auto sm:h-auto"
          >
            <div className="py-4 pl-8 ">
              <p className=" text-start mb-2 font-bold">{t("logistic")}</p>
              <p className="text-start text-xl">{t("logi")}</p>
            </div>
            <div className="mb-4 grid grid-cols md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 justify-around w-full mt-10">
              <div className=""> July 02, 2024</div>
              <div className="text-[#fd7062]"> Admin</div>
            </div>
          </div>
          <div
            className="relative group shadow-gray-600 overflow-hidden  ml-2 mr-2 
           transition hover:shadow 
           ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 
           hover:duration-300 bg-white text-[#1f425d] hover:bg-[#1f425d]
            hover:text-white lg:h-90 md:h-auto sm:h-auto"
          >
            <div className="py-4 pl-8">
              <p className=" text-start mb-2 font-bold">{t("transport")}</p>
              <p className="text-start text-xl">{t("trans")}</p>
            </div>
            <div className="mb-4 grid grid-cols md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 justify-around w-full mt-10">
              <div className=""> September 23, 2023</div>
              <div className="text-[#fd7062]"> Admin</div>
            </div>
          </div>
          <div
            className="relative group shadow-gray-600 overflow-hidden ml-2 mr-2 
           transition hover:shadow 
          ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 
           hover:duration-300 bg-white text-[#1f425d] hover:bg-[#1f425d]
            hover:text-white lg:h-90 md:h-auto sm:h-auto"
          >
            <div className="py-4 px-8">
              <p className=" text-start mb-2 font-bold">{t("delivery")}</p>
              <p className="text-start text-xl">{t("deliv")}</p>
            </div>
            <div className="mb-4 grid grid-cols md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 justify-around w-full mt-10">
              <div className=""> february 12, 2021</div>
              <div className="text-[#fd7062]"> Admin</div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Blog;
