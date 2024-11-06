"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Overview = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="w-full bg-white">
      <div className="text-bold text-2xl text-center justify-center pt-8 lg:text-4xl md:text-4xl">
        <span className="text-[#4ab9cf]">{t("company")} </span>
        <span className="text-[#4ab9cf] ">{t("overview")}</span>
      </div>
      <div className="grid grid-cols lg:grid-cols-3">
        <div className="pix md:col-span-1 lg:col-span-2 ml-8 mr-8 mt-10 mb-10">
          <img
            className="w-full h-full shadow rounded-lg"
            src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728403922/delivery_man_zvsjqy.jpg"
            // width={100}
            // height={20}
          />
        </div>
        <div className="bg-[#fbf9fa] mr-4 sm:mr-4 ml-4 lg:mt-10 mb-10 rounded-lg ">
          <h3 className="text-bold text-2xl text-[#fd7062] px-4  py-4 text-center">
            {t("who")}?
          </h3>
          <p className=" text-[#1f425d] px-4">{t("we are")}</p>
          <br></br>
          <p className="px-4">
            {" "}
            <span className="text-[#fd7062] text-xl">{t("mision")}</span>
          </p>
          <p className=" text-[#1f425d] px-4">{t("mission")}</p>
          <br></br>
          <p className="px-4">
            {" "}
            <span className="text-[#fd7062] text-xl">{t("we do")}</span>
          </p>
          <p className="text-[#1f425d] px-4">{t("what we doo")}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
