"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <div id="testimonials" className="w-full bg-white">
      <div className="text-bold text-2xl text-center justify-center pt-8 lg:text-4xl md:text-4xl mt-8">
        <span className="text-[#4ab9cf]">{t("client")} </span>
        <span className="text-[#4ab9cf] "> {t("feedback")} </span>
        <p className="pb-2  mt-2 mb-2 text-2xl  text-[#ff6a00] text-bold ">
          {" "}
          <span className="text-[#fd7062]">{t("testimonial")}</span>
        </p>
      </div>
      <div className=" mt-2 ml-4 mr-4 mb-12 grid grid-cols  md:grid-cols-2  sm:grid-cols-2  lg:grid-cols-3 gap-4">
        <div
          className="relative group shadow-gray-600 overflow-hidden  ml-2 mr-2 
            hover:shadow-xl  
            bg-white text-[#1f425d]
            hover:text-[#1f425d]  lg:h-auto md:h-auto sm:h-auto"
        >
          <div className="flex justify-center items-center pt-4 ">
            <Image
              className=" justify-center rounded-full"
              src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728403905/alice_smith_nbsbiw.jpg"
              alt=" "
              width={100}
              height={90}
            />
          </div>

          <div className="py-4 px-4 ">
            <p className=" mb-2 font-bold justify-center text-center text-2xl">
              Alice Smith
            </p>
            <p className=" mb-2 font-bold justify-center text-center">
              {t("entrepreneur")}
            </p>
            <p className="text-start text-xl">{t("alice")}</p>
            <p className=" flex text-[#fd7062] text-center justify-center items-center mt-4 font-bold text-2xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
          </div>
        </div>
        <div
          className="relative group shadow-gray-600 overflow-hidden  ml-2 mr-2 
            hover:shadow-xl  
            bg-white text-[#1f425d]
            hover:text-[#1f425d]  lg:h-auto md:h-auto sm:h-auto"
        >
          <div className="flex justify-center items-center pt-4 ">
            <Image
              className=" justify-center rounded-full mb-4"
              src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728403923/logistic_manager_ohpj4k.png"
              alt=" "
              width={100}
              height={90}
            />
          </div>
          <div className="py-4 px-4 ">
            <p className=" mb-2 font-bold justify-center text-center text-2xl">
              Henry Hughes
            </p>
            <p className=" mb-2 font-bold justify-center text-center">
              {t("business")}
            </p>
            <p className="text-start text-xl">{t("henry")}</p>

            <p className=" flex text-[#fd7062] text-center justify-center items-center mt-4 font-bold text-2xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
          </div>
        </div>
        <div
          className="relative group shadow-gray-600 overflow-hidden  ml-2 mr-2 
            hover:shadow-xl 
            bg-white text-[#1f425d]
            hover:text-[#1f425d]  lg:h-auto md:h-auto sm:h-auto"
        >
          <div className="flex justify-center items-center pt-4 ">
            <Image
              className=" justify-center rounded-full mb-4"
              src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728403927/mustafa_modpeg.png"
              alt=" "
              width={100}
              height={90}
            />
          </div>
          <div className="py-4 px-4 ">
            <p className=" mb-2 font-bold justify-center text-center text-2xl">
              Mustafa Ahmed
            </p>
            <p className=" mb-2 font-bold justify-center text-center">
              {t("logistic")}
            </p>
            <p className="text-start text-xl">{t("ahmed")}</p>
            <p className=" flex text-[#fd7062] text-center justify-center items-center mt-4 font-bold text-2xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
