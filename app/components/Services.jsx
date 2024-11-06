"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const {t} = useTranslation();
  return (
    <div className="w-full bg-[#1f425d] mt-4">
      <div id="services" className="w-full h-auto text-center">
        <div className="text-bold text-2xl text-center justify-center lg:text-4xl md:text-4xl">
          <br></br>

          <span className="text-[#4ab9cf] ">{t('what')}</span> 
          <span className="text-[#4ab9cf] "> {t('do')}</span>
          <p className="pb-2  mt-2 mb-2 text-2xl  text-[#ff6a00] text-bold ">
            {" "}
            <span className="text-[#fd7062]">{t('feature')}</span>
          </p>
        </div>
        <div
          className="ml-4 mr-4 mb-12 grid grid-cols md:grid-cols-2gap-4 
        sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <div id="air"
            className="relative group shadow-gray-600 overflow-hidden  shadow-md ml-2 mr-2 
           transition hover:shadow
           ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
          >
            <img
              className="w-full "
              src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728404268/aircraft_zrolvk.jpg"
               width={100}
               height={20}
               alt="air freight"
            />
            <div className="py-4 px-6 bg-[#1f425d] ">
              <p className=" text-start text-white text-2xl">{t('air freight')}</p>
              <p className="text-start text-white">
              {t('air')}
              </p>
            </div>
          </div>
          <div id="ocean"
            className="relative group shadow-gray-600 overflow-hidden  shadow-md ml-2 mr-2 
           transition hover:shadow
           ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
          >
            <img
              className="w-full"
              src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728403934/loaded_ship_mceec6.jpg"
              width={100}
               height={20}
               alt="ocean freight"
            />
            <div  className="py-4 px-6 bg-[#1f425d] ">
              <p className=" text-start text-white text-2xl">{t('ocean freight')}</p>
              <p className="text-start text-white">
              {t('ocean')}
              </p>
            </div>
          </div>
          <div id="road" 
            className="relative group shadow-gray-600 overflow-hidden  shadow-md ml-2 mr-2 
           transition hover:shadow
         ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
          >
            <img
              className="w-full"
              src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728403938/truck_a5hs88.jpg"
               width={100}
               height={20}
               alt="truck"
            />
            <div className="py-4 px-6 bg-[#1f425d] ">
              <p className=" text-start text-white text-2xl">  {t('road freight')}</p>
              <p className="text-start text-white">
             {t('road')}
              </p>
            </div>
          </div>
          <div  id="warehouse"
            className="relative group shadow-gray-600 overflow-hidden  shadow-md ml-2 mr-2 
           transition hover:shadow
           ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
          >
            <img
              className="w-full "
              src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728403970/warehouse_zlju12.jpg"
               width={100}
               height={20}
               alt="ware house"
            />
            <div className="py-4 px-6 bg-[#1f425d] ">
              <p className=" text-start text-white text-2xl">  {t('warehousing')}</p>
              <p className="text-start text-white">
              {t('warehouse')}
              </p>
            </div>
          </div>
          <div
            className="relative group shadow-gray-600 overflow-hidden  shadow-md ml-2 mr-2 
           transition hover:shadow
           ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
          >
            <img
              className="w-full "
              src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728403960/train_gnnynf.jpg"
              width={100}
              height={20}
              alt="continental rail"
            />
            <div className="py-4 px-6 bg-[#1f425d] ">
              <p className=" text-start text-white text-2xl">
              {t('rail')}
              </p>
              <p className="text-start text-white">
               {t('continental')}
              </p>
            </div>
          </div>
          <div id="custom"
            className="relative group shadow-gray-600 overflow-hidden  shadow-md ml-2 mr-2 
           transition hover:shadow 
           ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:bg-white
            hover:text-[#1f425d]"
          >
            <img
              className="w-full "
              src="https://res.cloudinary.com/ddukktwrv/image/upload/v1728602203/harbor_nyblbq.jpg"
               width={100}
               height={20}
               alt="Drone"
            />
            <div className="py-4 px-6 bg-[#1f425d] ">
              <p className=" text-start text-white text-2xl">{t('custom')}</p>
              <p className="text-start text-white">
               {t('broker')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Services;
