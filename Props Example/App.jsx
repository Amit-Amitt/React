import PropsExample from "./PropsExample";


function App() {
 let defaultHobbies=["Rad","Dance","Play Sports"];
  return (
    <>
     <PropsExample name="raj" age={25} hobbies={defaultHobbies}/>
    </>
  );
}
export default App;
