"use client";

import React from "react";
import axios from "axios";
import swal from "sweetalert2";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import{useSession} from "next-auth/react"


const ShippingForm = () => {
  const [stand, setStand] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [trackId, setTrackId] = useState("");
  const [shipmentDate, setShipmentDate] = useState("");
  const [packageName, setPackageName] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [weight, setWeight] = useState("");
  const [quantity, setQuantity] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [packageLocation, setPackageLocation] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderAddress, setSenderAddress] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [remark, setRemark] = useState("");
  const [loader, setLoader] = useState(false);
  const { status, data: session } = useSession();
  const router = useRouter();
  const url = "/api/uploads";
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/auth/signin'); // Redirect to sign-in page
    }
    if (status === 'authenticated') {
    }
  }, [status]); 

  const handleFormData = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(url, {
        name,
        email,
        trackId,
        shipmentDate,
        stand,
        packageName,
        deliveryDate,
        weight,
        quantity,
        serviceType,
        packageLocation,
        senderName,
        senderAddress,
        receiverAddress,
        remark,
        currentLocation,
      });
      console.log(result.data);

      if (result) {
        console.log(result);
        setLoader(false);
        swal.fire("Good job!", "Uploaded Succesfully", "success");
      }
      console.log({ result });
    } catch (error) {
      swal.fire("Error!", "Failed to Upload", "error");
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto p-4 text-[#1f425d] mb-20">
      <p className="text-center justify-center items-center text-xl font-bold my-4 text-[#1f425d]">
        Shipment
      </p>
      <form
        onSubmit={handleFormData}
        className=" ml-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20 justify-between"
      >
        <div className="col-span-1">
          <label
            htmlFor="Rname"
            className="block text-sm font-medium text-gray-700"
          >
            {" "}
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="Rname"
            className="mt-1 block w-40 px-3 py-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Rebecca Jenkhins"
          />
        </div>

        <div className="col-span-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="mt-1 block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="you@example.com"
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="Track"
            className="block text-sm font-medium text-gray-700"
          >
            Tracking Id
          </label>
          <input
            value={trackId}
            onChange={(e) => setTrackId(e.target.value)}
            type="text"
            id="Track"
            className="mt-1 block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="l82434895kh"
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="Track"
            className="block text-sm font-medium text-gray-700"
          >
            Current Location
          </label>
          <input
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
            type="text"
            id="currentLocation"
            className="mt-1 block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="present location"
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="shpment date"
            className="block text-sm font-medium text-gray-700"
          >
            Shipment Date
          </label>
          <input
            value={shipmentDate}
            onChange={(e) => setShipmentDate(e.target.value)}
            type="text"
            id="Sdate"
            className="mt-1 block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="wed, 12 August, 2024 9:15"
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="Status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <input
            value={stand}
            onChange={(e) => setStand(e.target.value)}
            type="text"
            id="Status"
            className="mt-1 block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="In transit, On hold"
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="Pname"
            className="block text-sm font-medium text-gray-700"
          >
            Package Name
          </label>
          <input
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            type="text"
            id="Pname"
            className="mt-1 block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Jewery, Smartphone, clothe"
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="Ddate"
            className="block text-sm font-medium text-gray-700"
          >
            Delivery Date
          </label>
          <input
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            type="text"
            id="Ddate"
            className="mt-1 block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="wed, 12 August, 2024 9:15"
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="weight"
            className="block text-sm font-medium text-gray-700"
          >
            Weight
          </label>
          <input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            type="number"
            id="weight"
            className="mt-1 block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="8Kg"
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="Quantity"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity
          </label>
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            id="quantity"
            className="mt-1 block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="5"
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="Stype"
            className="block text-sm font-medium text-gray-700"
          >
            Service Type
          </label>
          <input
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            type="text"
            id="Stype"
            className="mt-1 block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Express, Cargo"
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="Plocation"
            className="block text-sm font-medium text-gray-700"
          >
            Package Location
          </label>
          <input
            value={packageLocation}
            onChange={(e) => setPackageLocation(e.target.value)}
            type="text"
            id="Plocation"
            className="mt-1 block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="London, UK"
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="Sname"
            className="block text-sm font-medium text-gray-700"
          >
            Sender Name
          </label>
          <input
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            type="text"
            id="Sname"
            className="mt-1 block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Richard Baker"
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="Saddress"
            className="block text-sm font-medium text-gray-700"
          >
            Sender Address
          </label>
          <input
            value={senderAddress}
            onChange={(e) => setSenderAddress(e.target.value)}
            type="text"
            id="Saddress"
            className="mt-1 block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Doncaster, Uk"
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="Raddress"
            className="block text-sm font-medium text-gray-700"
          >
            Receiver Address
          </label>
          <input
            value={receiverAddress}
            onChange={(e) => setReceiverAddress(e.target.value)}
            type="text"
            id="Raddress"
            className="mt-1 block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="5 kings way Reading"
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="Remark"
            className="block text-sm font-medium text-gray-700"
          >
            Remark
          </label>
          <input
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            type="text"
            id="Remark"
            className="mt-1 block w-40 px-3  py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Package in good condition"
          />
        </div>

        <div className="col-span-2 md:col-span-2 lg:col-span-1 flex justify-center mb-20">
          <button
            type="submit"
            disabled={loader}
            className="inline-flex items-center ml-20 px-20 py-4 mt-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loader ? "Uploading...." : "Submit"}
          </button>
        </div>
      </form>
      {loader && <p>Loading...</p>}
    </div>
  );
};

export default ShippingForm;
