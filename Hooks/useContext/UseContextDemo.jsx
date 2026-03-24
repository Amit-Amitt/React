function Parent()
{
    const name="Raj";
    return<Child passName={name}/>
}
function Child({passName})
{
       return<GrandChild passName={passName}/>
}
function GrandChild({passName})
{
    return <h1>{passName}</h1>
}
export default function UseContextDemo() {
  return (
    <Parent/>
  )
}
