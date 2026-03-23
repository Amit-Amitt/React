import axios from 'axios';
import { useEffect, useState } from "react";
export default function AxiosApiDemo() {
  const[users,setUsers]=useState([]);
  
  useEffect(()=>{
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{setUsers(res.data)})
    
  },[]);

  return (
    <div>
      <h1>User Details</h1>
      {users.map((users)=>(
        <div key={users.id}>
          <p><b>Name</b> : {users.name}</p>
          <p>UserName :{users.username}</p>
          <p>Email: {users.email}</p>
          <p>City: {users.address.city}</p>
          <p>Phone: {users.phone}</p>
          <hr/>
        </div>
      ))}
      
    </div>
  )
}
