"use client";
import react from "react";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const Track = () => {
  const [trackId, setTrackId] = useState("");
  const { t } = useTranslation();
  return (
    <div className=" ml-4 flex gap-4 mt-12  justify-center items-center">
    <input
      value={trackId}
      onChange={(e) => setTrackId(e.target.value)}
      type="text"
      id="Track"
      className=" ml-4 mt-1 block w-40 lg:w-45 px-3 py-2 pb-2 border border-[#1f425d] rounded-md shadow-sm focus:outline-none focus:ring-[#4ab9cf] focus:border-[#4ab9cf] sm:text-sm"
      placeholder="l824F34895UD"
    />
    <Link href={`/Order/${trackId}`}>
      {" "}
      <button className="px-4  py-2 mt-1 bg-[#4ab9cf] text-white font-bold hover:bg-[#1f425d] ">
        {t("order")}
      </button>
    </Link>
  </div>
  );
};
export default Track;
