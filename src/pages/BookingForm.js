import axios from "axios";
import { useState } from "react";

function BookingForm(){

  const [service,setService]=useState("");
  const [date,setDate]=useState("");

  const handleBooking=async()=>{

    const user=JSON.parse(localStorage.getItem("user"));

    if(!user){
      alert("Login first ❌");
      return;
    }

    try{
      await axios.post("http://localhost:8080/api/bookings/add",{
        service:service,
        date:date,
        userEmail:user.email
      });

      alert("Booking Successful ✅");

    }catch(err){
      alert("Error saving booking ❌");
    }
  }

  return(
    <div style={{padding:"20px"}}>

      <h2>Book Service</h2>

      <input placeholder="Service" onChange={(e)=>setService(e.target.value)} />
      <input type="date" onChange={(e)=>setDate(e.target.value)} />

      <button onClick={handleBooking}>Book</button>

    </div>
  )
}

export default BookingForm;