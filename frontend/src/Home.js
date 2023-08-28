import axios from "axios";
import React, { useEffect, useState } from "react";


function Home() {

  const [auth,setAuth] = useState(false)
  console.log('check auth', auth)
  const [name,setName] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8081')
    .then(res => {
      // console.log('check api',res)
      if(res.data.Status === "Success"){
        setAuth(true);
        setName(res.data.name);
       


      }else{
        setAuth(false);
        setMessage(res.data.Message);
      }
    })
  },[])

  const handleLogout = () =>{
    axios.get('http://localhost:8081/logout')
  }

  return (
    <div className="container mt-4">
      {auth ? (
        <div>
          <h3>You are Authorized {name}</h3>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h3>{message}</h3>
          <h3>Login Now</h3>
          <button className="btn btn-primary">Login</button>
        </div>
      )}
    </div>
  );
}

export default Home;
