import { useEffect, useState } from "react";
export default function UseEffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("Runs Only Once");
  },[]);

   /*useEffect(()=>{
    console.log("Runs everytime");
  });*/

  
   /*useEffect(()=>{
    console.log("Runs depends on count variable");
  },count);*/
  
  let geCount=()=>{
    setCount(count+1);
  }
  return (
    <>
      <p>Count is :{count} </p>
      <button onClick={geCount}>Increment Count</button>
    </>
  );
}
