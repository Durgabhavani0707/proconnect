import { useNavigate } from "react-router-dom";

function Services(){

  const navigate = useNavigate();

  return(
    <div style={{padding:"20px"}}>

      <h2>Our Services</h2>

      <div style={{display:"flex", gap:"20px"}}>

        <div onClick={()=>navigate("/booking")} style={{
          border:"1px solid #ccc",
          padding:"20px",
          cursor:"pointer"
        }}>
          Cleaning
        </div>

        <div onClick={()=>navigate("/booking")} style={{
          border:"1px solid #ccc",
          padding:"20px",
          cursor:"pointer"
        }}>
          Plumbing
        </div>

        <div onClick={()=>navigate("/booking")} style={{
          border:"1px solid #ccc",
          padding:"20px",
          cursor:"pointer"
        }}>
          Electrical
        </div>

      </div>

    </div>
  )
}

export default Services;