import { useEffect,useState } from "react";
import axios from "axios";

function Bookings(){

  const [data,setData]=useState([]);

  useEffect(()=>{

    const user=JSON.parse(localStorage.getItem("user"));

    if(user){
      axios.get(`http://localhost:8080/api/bookings/${user.email}`)
      .then(res=>setData(res.data))
      .catch(err=>console.log(err));
    }

  },[]);

  return(
    <div style={{padding:"20px"}}>

      <h2>My Bookings</h2>

      {data.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        data.map((b)=>(
          <div key={b.id} style={{
            border:"1px solid #ccc",
            padding:"10px",
            margin:"10px",
            borderRadius:"8px"
          }}>
            <h3>{b.service}</h3>
            <p>{b.date}</p>
          </div>
        ))
      )}

    </div>
  )
}

export default Bookings;