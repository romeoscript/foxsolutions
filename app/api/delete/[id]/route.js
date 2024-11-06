import connectDB from "../../../../config/connectDB";
import Logistic from "../../../../models/logisticModel";
import { NextResponse } from "next/server";



export async function DELETE(req, { params }) {
    try {
      await connectDB();
      const userId = params.id; // Get the dynamic parameter
      const user = await Logistic.deleteOne({trackId:userId});
  
      if (!user) {
        return new Response(JSON.stringify({ message: 'User not found' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      return new Response(JSON.stringify(user), {
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
  