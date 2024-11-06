import connectDB from "../../../../config/connectDB";
import Logistic from "../../../../models/logisticModel";
import { NextResponse } from "next/server";



export async function PATCH (req, { params }) {
    const id = params.id;
    console.log(id);
    const body = await req.json();
    console.log(body);
    try {
      await connectDB();
      // Get the dynamic parameter
      const logistics = await Logistic.findByIdAndUpdate(id, ...body, {
          new: true, // Return the updated document
          runValidators: true, // Validate data against the schema
        });
  
      if (!logistics) {
        return new Response(JSON.stringify({ message: 'logistic id not found' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      return new Response(JSON.stringify(id), {
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
  