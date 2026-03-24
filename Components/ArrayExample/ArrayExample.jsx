function ArrayExample()
{
  const fruits=["apple","banana","pineapple"];

  return(
    <>
      <ul>
        {fruits.map((fruits,index)=>{
          return <li key={index}>{fruits}</li>
        })}
      </ul>
    </>
  );

}
export default ArrayExample