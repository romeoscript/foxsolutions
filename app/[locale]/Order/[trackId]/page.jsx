import React from "react";
import axios from "axios";
import { notFound } from "next/navigation";
import initTranslations from "@/app/i18n";
import Track from "@/app/components/Track";
const Order = async ({ params }) => {
  const { locale, trackId } = params;
  const { t } = await initTranslations(locale, ["hero"]);

  console.log("Received trackId:", trackId);
  const url = `https://foxsolution.vercel.app/api/track/${trackId}`;

  try {
    const response = await axios.get(url);
    if (!response || !response.data || response.data.length === 0) {
      notFound(); // Call notFound to trigger a 404
    }

    const trackData = response.data;
    console.log(trackData);
    return (
      <div className="w-full bg-[#1f425d] mb-16">
        {trackData.map((logistic) => (
          <div key={logistic._id}>
            <div id="services" className="w-full h-auto text-center">
              <div className=" text-bold text-2xl text-center justify-center lg:text-4xl md:text-4xl">
                <br></br>
                <br></br>
                <br></br>
                <span className="text-white">{t("track")}</span>
                <span className="text-[#fd7062]"> & </span>{" "}
                <span className="text-[#4ab9cf] ">{t("trace")}</span>
                <p className="pb-2  mt-2 mb-2 text-2xl  text-[#ff6a00] text-bold ">
                  {" "}
                  <span className="text-[#fd7062]">{t("tracking")}</span>
                </p>
              </div>
              <div className="ml-4 mr-4 text-center bg-[#4ab9cf] text-bold text-[#1f425d] text-xl lg:text-2xl">
                <p className="uppercase py-8">
                  Order tracking: {logistic.trackId}{" "}
                </p>
              </div>

              <div className="ml-2 mr-2 mb-12 grid grid-cols  md:grid-cols sm:grid-cols  lg:grid-cols-3 gap-4">
                <div
                  className="relative group shadow-gray-600 overflow-hidden  ml-2 mr-2 
            hover:shadow bg-white text-[#1f425d] hover:bg-[#1f425d]
            hover:text-white lg:h-auto md:h-auto sm:h-auto"
                >
                  <div className="py-4 px-8 ">
                    <p className=" text-center text-xl mb-2 font-bold pt-4 text-[#fd7062]">
                      {t("edd")}
                    </p>
                    <p className="text-center py-8 text-2xl">
                      {logistic.deliveryDate}
                    </p>
                  </div>
                </div>
                <div
                  className="relative group shadow-gray-600 overflow-hidden  ml-2 mr-2 hover:shadow 
          bg-white text-[#1f425d] hover:bg-[#1f425d]
            hover:text-white lg:h-auto md:h-auto sm:h-auto"
                >
                  <div className="py-4 px-8 ">
                    <p className=" text-center text-xl mb-2 font-bold pt-4 text-[#fd7062]">
                      {t("status")}
                    </p>
                    <p className="text-center py-8 text-2xl">
                      {logistic.stand}
                    </p>
                  </div>
                </div>
                <div
                  className="relative group shadow-gray-600 overflow-hidden ml-2 mr-2 
          hover:shadow bg-white text-[#1f425d] hover:bg-[#1f425d]
            hover:text-white lg:h-auto md:h-auto sm:h-auto"
                >
                  <div className="py-4 px-8">
                    <p className=" text-center text-xl mb-2 font-bold pt-4 text-[#fd7062]">
                      {" "}
                      {t("cl")}
                    </p>
                    <p className="text-center text-2xl py-8">
                      {logistic.currentLocation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className=" mt-8 ml-4 mr-4  grid grid-cols md:grid-cols sm:grid-cols lg:grid-cols-3 gap-4">
              <div
                className="relative group shadow-gray-600 overflow-hidden  ml-2 mr-2 hover:shadow 
           bg-white text-[#1f425d] hover:bg-[#1f425d]
            hover:text-white lg:h-80 md:h-auto sm:h-auto"
              >
                <div className=" ">
                  <p
                    className=" text-start bg-[#fd7062] py-4 px-4 mb-2 font-bold text-2xl
               lg:text-center sm:text-center "
                  >
                    {t("sd")}
                  </p>
                  <p className="text-start text-bold px-4 py-2 lg:text-xl lg:text-center sm:text-center">
                    {t("st")}:{" "}
                    <span className="text-[#fd7062]">
                      {" "}
                      {logistic.serviceType}
                    </span>
                  </p>
                  <p className="text-start text-bold px-4 py-2 lg:text-xl lg:text-center sm:text-center">
                    {t("qt")}:{" "}
                    <span className="text-[#fd7062]">
                      {" "}
                      {logistic.quantity}{" "}
                    </span>
                  </p>
                  <p className="text-start text-bold px-4 py-2 lg:text-xl lg:text-center sm:text-center">
                    {t("wt")} :{" "}
                    <span className="text-[#fd7062]"> {logistic.weight}Kg</span>
                  </p>

                  <p className="text-start text-bold px-4 py-2 lg:text-xl lg:text-center sm:text-center">
                    {t("rmk")} :{" "}
                    <span className="text-[#fd7062]">{logistic.remark} </span>
                  </p>
                
                </div>
              </div>
              <div
                className="relative group shadow-gray-600 overflow-hidden  ml-2 mr-2 hover:shadow 
           bg-white text-[#1f425d] hover:bg-[#1f425d]
            hover:text-white lg:h-80 md:h-auto sm:h-auto"
              >
                <div className=" ">
                  <p
                    className=" text-start 
            bg-[#fd7062] py-4 px-4 mb-2 font-bold text-2xl lg:text-center sm:text-center "
                  >
                    {t("dest")}
                  </p>
                  <p className="text-start text-bold px-4 py-2 lg:text-xl lg:text-center sm:text-center">
                    {t("rn")}:{" "}
                    <span className="text-[#fd7062]">{logistic.name}</span>
                  </p>
                  <p className="text-start text-bold px-4 py-2 lg:text-xl lg:text-center sm:text-center">
                    {t("re")}:{" "}
                    <span className="text-[#fd7062]">{logistic.email}</span>
                  </p>
                  <p className="text-start text-bold px-4 py-2 lg:text-xl lg:text-center sm:text-center">
                    {t("rad")}:{" "}
                    <span className="text-[#fd7062]">
                      {logistic.receiverAddress}{" "}
                    </span>
                  </p>

                  <p className="text-start text-bold px-4 py-2 lg:text-xl lg:text-center sm:text-center">
                    {t("edd")}:{" "}
                    <span className="text-[#fd7062]">
                      {logistic.deliveryDate}
                    </span>
                  </p>
                </div>
              </div>
              <div
                className="relative group shadow-gray-600 overflow-hidden  ml-2 mr-2 hover:shadow 
           bg-white text-[#1f425d] hover:bg-[#1f425d]
            hover:text-white lg:h-80 md:h-auto sm:h-auto"
              >
                <div className=" ">
                  <p className=" text-start bg-[#fd7062] py-4 px-4 mb-2 font-bold text-2xl lg:text-center sm:text-center">
                    {t("origin")}
                  </p>
                  <p className="text-start text-bold px-4 py-2 lg:text-xl lg:text-center sm:text-center">
                    {t("sn")}:{" "}
                    <span className="text-[#fd7062]">
                      {" "}
                      {logistic.senderName}{" "}
                    </span>
                  </p>
                  <p className="text-start text-bold px-4 py-2 lg:text-xl lg:text-center sm:text-center">
                    {t("loc")}:{" "}
                    <span className="text-[#fd7062]">
                      {logistic.packageLocation}{" "}
                    </span>
                  </p>
                  <p className="text-start text-bold px-4 py-2 lg:text-xl lg:text-center sm:text-center">
                    {t("sa")}:{" "}
                    <span className="text-[#fd7062]">
                      {logistic.senderAddress}{" "}
                    </span>
                  </p>

                  <p className="text-start text-bold px-4 py-2 lg:text-xl lg:text-center sm:text-center">
                    {t("ds")}:
                    <span className="text-[#fd7062]">August 12, 2024</span>
                  </p>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching order data:", error);

    return (
      <div className="w-full bg-white">
        <div className=" text-bold text-2xl text-center justify-center lg:text-4xl md:text-4xl mb-10">
          <br></br>
          <br></br>
          <br></br>
          <span className="text-[#4ab9cf]">{t("track")}</span>
          <span className="text-[#4ab9cf]"> & </span>{" "}
          <span className="text-[#4ab9cf] ">{t("trace")}</span>
          <p className="text-2xl text-[#1f425d] mb-8"> <span className="text-[#fd7062]">{t("error")} </span></p>
          <div className="text-xl justify-center items-center">
            <Track />
          </div>
        </div>
      </div>
    );
    notFound();
  }
};

export default Order;
