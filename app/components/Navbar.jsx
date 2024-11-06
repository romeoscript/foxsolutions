"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RiMenu3Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import LanguageChanger from "./LanguageChanger";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation() || {};
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [NavBg, setNavBg] = useState("white");
  const [LinkColor, setLinkColor] = useState("#1f425d");
  const router = useRouter();

  //   useEffect(() => {
  //     if (router.asPath === "/About") {
  //       setNavBg("#4f4f4f");
  //       setLinkColor("black");
  //     } else {
  //       setNavBg("transparent");
  //       setLinkColor("black");
  //     }
  //   }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 10) {
        setShadow(true);
        setNavBg("#fff");
        setLinkColor("#1f425d");
      } else {
        setShadow(false);
        setNavBg("white");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${NavBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl shadow-gray-500 z-[70]"
          : "fixed w-full h-20 z-[70]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div
          style={{ color: `${LinkColor}` }}
          onClick={handleNav}
          className="md:hidden"
        >
          <RiMenu3Fill size={28} />
        </div>
        <Link href="/#home">
          <p
            style={{ color: `${LinkColor}` }}
            className="font-bold text-3xl pb-6 hover:cursor-pointer py-4"
          >
            <Image className="  md:ml-8 lg:ml-8"
              src="https://res.cloudinary.com/ddukktwrv/image/upload/v1730558573/FoxContinental_2_lswm7m.png"
              alt="Foxcontinental"
              height={100}
              width={330}
            />
          
          
          </p>
        </Link>

        <div>
          <LanguageChanger />
          <ul style={{ color: `${LinkColor}` }} className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 font-bold uppercase hover:border-b py-2">
                {t("home")}
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 font-bold uppercase hover:border-b py-2">
                {t("about")}
              </li>
            </Link>
            <Link href="/#services ">
              <li className="ml-10 font-bold uppercase hover:border-b py-2">
                {t("service")}
              </li>
            </Link>
            <Link href="/#footer">
              <li className="ml-10 font-bold uppercase hover:border-b py-2">
                {t("contact")}
              </li>
            </Link>
            <Link href="/#home">
              <li className="ml-10 font-bold uppercase hover:border-b py-2">
                {t("tracking")}
              </li>
            </Link>
          </ul>
          {/* <div
            style={{ color: `${LinkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <RiMenu3Fill size={28} />
          </div> */}
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#4ab9cf] p-10 ease-in duration-500"
              : "fixed left-[-150%] top-0  p-10 ease-in duration-800"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <Link href="/#home">
                <p
                  className="text-white font-bold text-3xl pb-6 hover:cursor-pointer"
                  onClick={() => setNav(false)}
                >
                   {/* <img className=" md:ml-8 lg:ml-8"
              src="https://res.cloudinary.com/ddukktwrv/image/upload/v1730558573/FoxContinental_2_lswm7m.png"
              alt="Foxcontinental"
          
            >
          
            </img> */}
                </p>
              </Link>

              <div
                style={{ color: `${LinkColor}` }}
                onClick={handleNav}
                className="rounded-full shadow-sm shadow-gray-100 p-3 cursor-pointer"
              >
                <GrClose size={20} />
              </div>
            </div>
            {/* <div className="border-b border-orange-400 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-md text-white">
                {" "}
                For your Tech installation services and products{" "}
              </p>
            </div> */}
          </div>
          <div className="py-4 flex flex-col text-white">
            <ul className="uppercase">
              <Link href="/#home">
                <li
                  className="py-2 text-md border-b border-gray-500"
                  onClick={() => setNav(false)}
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  className="py-2 text-md border-b border-gray-500"
                  onClick={() => setNav(false)}
                >
                  about
                </li>
              </Link>
              <Link href="/#services ">
                <li
                  className="py-2 text-md border-b border-gray-500"
                  onClick={() => setNav(false)}
                >
                  services
                </li>
              </Link>

              <Link href="/#footer">
                <li
                  className="py-2 text-md border-b border-gray-500"
                  onClick={() => setNav(false)}
                >
                  contact us
                </li>
              </Link>
              <Link href="/#home">
                <li
                  className="py-2 text-md border-b border-gray-500"
                  onClick={() => setNav(false)}
                >
                  Track shipment
                </li>
              </Link>
            </ul>
            <br />
            <p className="py-2 text-2xl text-bold text-[#1f425d] mt-12">
              Connect with us
            </p>
          </div>

          <div className="flex gap-6 pb-5 justify-start items-center text-white">
            <a href="#">
              <FaFacebook className=" flex text-3xl cursor-pointer hover:text-blue-700" />
            </a>
            <a href="mailto:support@foxcontinental.com">
              <AiOutlineMail className=" flex text-3xl cursor-pointer hover:text-[#fd7e14]" />
            </a>
            <a href=" https://wa.me/+2349063899239">
              <FaWhatsapp className=" flex text-3xl cursor-pointer hover:text-green-700" />
            </a>
            <a href="tel:+2349063899239">
              <FiPhoneCall className=" flex text-3xl cursor-pointer hover:text-[#fd7e14]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
