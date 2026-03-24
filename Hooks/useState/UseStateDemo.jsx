import { useState } from "react";
export default function UseStateDemo() {
  const [count, setCount] = useState(0);

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
