import connectDB from "../../../config/connectDB";
import Logistic from "../../../models/logisticModel";
import { NextResponse } from "next/server";

export async function  POST (req, res) {
     
    await connectDB();
 
    console.log("connecting  to mongodb");

    console.log("connected to mongodb !!!!");

    const body = await req.json();

    const logistic = Logistic({
     name:body.name,
     email:body.email,
     trackId:body.trackId,
     shipmentDate:body.shipmentDate,
     stand:body.stand,
     packageName:body.packageName,
     deliveryDate:body.deliveryDate,
     weight:body.weight,
     quantity:body.quantity,
     serviceType:body.serviceType,
     packageLocation:body.packageLocation,
     senderName:body.senderName,
     senderAddress:body.senderAddress,
     receiverAddress:body.receiverAddress,
     remark:body.remark,
     currentLocation:body.currentLocation
    });
  
   await logistic?.save();
    console.log({ logistic });
   console.log("saved succesfully!!!!!");
    return NextResponse.json(body)
  };

 
export async function GET() {
  try {
     await connectDB();
    const logistic = await Logistic.find({});
    
    return new Response(JSON.stringify(logistic), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ message: 'Failed to fetch data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}










