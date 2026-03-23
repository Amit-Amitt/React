import { useEffect, useState } from "react";
export default function ApiD() {
  const[users,setUsers]=useState([]);
  
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>{setUsers(data)})
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
