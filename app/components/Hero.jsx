"use client";
import { useTranslation } from "react-i18next";
import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [trackId, setTrackId] = useState("");
  console.log(trackId);
  const { t } = useTranslation();
  return (
    <div
      id="home"
      className="w-full text-center lg:h-screen md:h-screen sm:h-screen lg:mb-10 md:mb-8 sm:mb-4"
    >
      <div
        className="max-w-[2560px] w-full h-96 mx-auto p-2 flex justify-center items-center bg-cover
       lg-center relative sm:h-4/5"
      >
        {/* image on automatic slide with wiper js */}
        <Image
          src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728403935/flight_kw9uqr.jpg"
          className="bg-opacity-100 absolute object-fill w-full h-full lg:hidden "
          alt=""
          height={750}
          width={1600}
        />
        <Image
          src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728403935/flight_kw9uqr.jpg"
          className="absolute object-fill w-full h-full "
          alt=""
          height={750}
          width={1600}
        />

        <div className="absolute w-full text-start text-[#1f425d] sm:mb-16">
          <div className="ml-10 lg:ml-20 mb-8 mt-20 sm:pt-20 xl:mt-10 ">
            <p className="text-4xl lg:4xl text bold">
              {t("class")}
              <br></br>
              <span className="text-[#fd7062]"> {t("delivery")}</span>
            </p>
          </div>

          <div className="ml-10 lg:ml-20 ">
            <div className="flex gap-4 mt-12 ">
              <input
                value={trackId}
                onChange={(e) => setTrackId(e.target.value)}
                type="text"
                id="Track"
                className="mt-1 block w-40 lg:w-45 px-3 py-2 pb-2 border border-[#1f425d] rounded-md shadow-sm focus:outline-none focus:ring-[#4ab9cf] focus:border-[#4ab9cf] sm:text-sm"
                placeholder="l824F34895UD"
              />
              <Link href={`/Order/${trackId}`}>
                {" "}
                <button className="px-4  py-2 mt-1 bg-[#4ab9cf] text-white font-bold hover:bg-[#1f425d] ">
                  {t("order")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-64 bg-[#fbf9fa] flex lg:h-40">
        {/* for medium and large devices start here */}
        <div className=" hidden sm:flex gap-4  ml-4 lg:ml-20 w-full">
          <p className="py-16 sm:py-12">
            {" "}
            <a href="mailto:support@foxcontinental.com">
              <AiOutlineMail
                size={30}
                className=" flex text-3xl cursor-pointer text-[#fd7062] hover:text-[#ff6a00]"
              />
            </a>{" "}
          </p>

          <p className="py-8 text-sm text-start lg:text-xl md:text-2xl">
            <span className="text-bold text-[#4ab9cf]">
              {" "}
              {t("quick contact")}
            </span>
            <br></br>
            <span className="text-[#1f425d]">support@foxcontinental.com</span>
          </p>
        </div>
        <div className="hidden sm:flex gap-4  ml-10 lg:ml-20 w-full">
          <p className="py-16 sm:py-12">
            {" "}
            <a href="mailto:foxcontinentald@gmail.com">
              <MdLocationOn
                size={30}
                className=" flex text-3xl cursor-pointer text-[#fd7062] hover:text-[#ff6a00]"
              />
            </a>{" "}
          </p>

          <p className="py-8 text-sm text-start text-bold lg:text-xl md:text-2xl">
            <span className="text-bold text-[#4ab9cf]  ">
              {" "}
              {t("our location")}
            </span>
            <br></br>
            <span className="text-[#1f425d]">
              {" "}
              Miami Florida,United States of America
            </span>
          </p>
          {/* end here */}
        </div>
        {/* the div below is for small devices */}
        <div
          className="grid grid-cols mt-2 md:hidden sm:hidden
         lg:hidden "
        >
          <div className="ml-4 flex text-start items-start ">
            <p className="py-12 px-2">
              {" "}
              <a href="mailto:support@foxcontinental.com">
                <AiOutlineMail
                  size={30}
                  className="flex text-3xl cursor-pointer text-[#fd7062] hover:text-[#ff6a00]"
                />
              </a>{" "}
            </p>

            <p className="py-8 text-md text-start  ">
              <span className="text-bold text-xl text-[#4ab9cf]">
                {" "}
                {t("quick contact")}
              </span>
              <br></br>
              <span className="text-[#1f425d]">
                Email:support@foxcontinental.com
              </span>
            </p>
          </div>
          <div className="ml-4 flex text-end items-end justify-end">
            <p className="py-12 px-2">
              <MdLocationOn
                size={30}
                className=" flex text-3xl cursor-pointer text-[#fd7062] hover:text-[#ff6a00]"
              />
            </p>

            <p className="py-8 text-md text-start ">
              <span className="text-bold text-[#4ab9cf] text-xl ml-2">
                {" "}
                {t("our location")}
              </span>
              <br></br>
              <span className="text-[#1f425d]">
                Miami Florida,United States of America
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
