import { useNavigate } from "react-router-dom";

function Dashboard(){

  const navigate=useNavigate();
  const user=JSON.parse(localStorage.getItem("user"));

  if(!user){
    window.location.href="/login";
  }

  return(
    <div style={{padding:"20px"}}>

      <h2>Welcome {user?.name} 👋</h2>

      <button onClick={()=>navigate("/booking")}>
        Book Service
      </button>

      <button onClick={()=>navigate("/bookings")} style={{marginLeft:"10px"}}>
        My Bookings
      </button>

    </div>
  )
}

export default Dashboard;