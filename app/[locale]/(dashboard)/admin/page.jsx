"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation'; 
import{useSession} from "next-auth/react"

const Consignment = () => {
    const [logistics, setLogistics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { status, data: session } = useSession();
    const [loader, setLoader] = useState(false);
     const router = useRouter();
    useEffect(() => {
        if (status === 'unauthenticated') {
          router.replace('/auth/signin'); // Redirect to sign-in page
        }
        if (status === 'authenticated') {

          const fetchLogistics = async () => {
            try {
              const response = await axios.get('/api/uploads');
              setLogistics(response.data);
            } catch (err) {
              setError('Failed to fetch users.');
              console.error('Error:', err);
            } finally {
              setLoading(false);
            }
          };
      
          fetchLogistics();
        
      }
      }, [status]); 
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error}</p>;
  
    const handleUpdate = async (updateId) => {
        const { value: formValues } = await Swal.fire({
          title: "Update....",
          html:
        
            "<input value='' id='swal-input1' class='swal2-input' placeholder='Status'>" +
            // "<input value='' id='swal-input2' class='swal2-input' placeholder=' Package Location'>" +
            "<input value='' id='swal-input3' class='swal2-input' placeholder=' Delivery Date'>" +
            "<input value='' id='swal-input4' class='swal2-input' placeholder='remark'>"+
            "<input value='' id='swal-input5' class='swal2-input' placeholder='Current Location'>",
    
          focusConfirm: false,
          preConfirm: () => {
            return [
              {
              
                stand: document.getElementById("swal-input1").value,
                deliveryDate: document.getElementById("swal-input3").value,
                // packageLocation: document.getElementById("swal-input2").value,
                remark: document.getElementById("swal-input4").value,
                currentLocation: document.getElementById("swal-input5").value,

              },
              
            ];
          },
        });
        if (formValues) {
          setLoader(true);
          // call backend code for deleting
          try {
            console.log(formValues);
            const res = await fetch(`/api/edit/${updateId}`, {
              method: "PATCH",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formValues),
            });
    
            const data = await res.json();
    
            if (res) {
              setLoader(false);
              Swal.fire("Good job!", "Updated Succesfully...", "success");
            }
          } catch (e) {
            setLoader(false);
            Swal.fire("Errorrr!", "Failed to Update!", "question");
          }
        }
    
        //   if (formValues) {
        //     Swal.fire(JSON.stringify(formValues))
        //   }
      };

    const handleDelete = async (deleteId) => {
        Swal.fire({
          title: "Are you sure you want to delete?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            setLoader(true);
            // call backend code for deleting
    
            try {
              const res = await fetch(
                `/api/delete/${deleteId}`,
                {
                  method: "DELETE",
                }
              );
    
              const data = await res.json();
    
              console.log(data);
    
              if (res) {
                setLoader(false);
                Swal.fire("Good job!", "Deleted Succesfully", "success");
              }
            } catch (e) {
              setLoader(false);
              Swal.fire("Error!", "Something is Broken!", "question");
            }
          }
        });
      };

  
  return (
    <div className='ml-20 bg-gray-100 min-h-screen'>
      <div className="text-center items-center justify-center mt-4">
        <h2 className="text-xl text-[#fd7062] font-bold ">Latest Shipments</h2>
      </div>
<div className="overflow-x-auto ">
    <table className=" ml-4 mr-4 mt-8 mb-16 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Track Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Shipment Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Package Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Delivery Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Weight
                </th>
                <th scope="col" className="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                    Current Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Service Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Package Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Sender Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Sender Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Receiver Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Remark
                </th>
                <th scope="col" className="px-6 py-3">
                    Edit
                </th>
                <th scope="col" className="px-6 py-3">
                    Delete
                </th>
               
                
            </tr>
        </thead>
        <tbody>
          {logistics.map((logistic) => (
            <tr key={logistic._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {logistic.name}
                </th>
                <td className="px-6 py-4">
                    {logistic.email}
                </td>
                <td className="px-6 py-4">
                    {logistic.trackId}
                </td>
                <td className="px-6 py-4">
                {logistic.shipmentDate}
                </td>
                <td className="px-6 py-4">
                {logistic.stand}
                </td>
                <td className="px-6 py-4">
                {logistic.packageName}
                </td>
                <td className="px-6 py-4">
                {logistic.deliveryDate}
                </td>
                <td className="px-6 py-4">
                {logistic.weight}
                </td>
                <td className="px-6 py-4">
                {logistic.quantity}
                </td>
                <td className="px-6 py-4">
                {logistic.currentLocation}
                </td>
                <td className="px-6 py-4">
                {logistic.serviceType}
                </td>
                <td className="px-6 py-4">
                {logistic.packageLocation}
                </td>
                <td className="px-6 py-4">
                {logistic.senderName}
                </td>
                <td className="px-6 py-4">
                {logistic.senderAddress}
                </td>
                <td className="px-6 py-4">
                {logistic.receiverAddress}
                </td>
                <td className="px-6 py-4"> 
                {logistic.remark}
                </td>
                <td className="px-6 py-4">
                  <button   onClick={() => handleUpdate(logistic._id)} className="bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {loading ? "editing...." : "Edit"}
                </button>  
                {loader && <p>Editing....</p>} 
                </td>
                <td className="px-6 py-4">
                  <button  onClick={() => handleDelete(logistic.trackId)} className="bg-red-700 text-white font-bold py-2 px-4 rounded">
    
                {loader ? "Deleting...." : "Delete"}
               
                </button> 
                {loader && <p>Deleting...</p>} 
                </td>
                </tr>
          ))}
        </tbody>
    </table>
</div>

    </div>
  );
};

export default Consignment;