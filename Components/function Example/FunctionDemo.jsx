function FunctionDemo() {
  function getName(addName) {
    return addName;
  }
  return (
    <>
      <h1>{getName("CharmyVora")}</h1>
      <h1>{getName("Rahi")}</h1>
    </>
  );
}
export default FunctionDemo;
