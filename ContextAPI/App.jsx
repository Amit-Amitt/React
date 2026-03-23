import React, { useContext } from "react";
import UserContext from "./UserContext";

function App() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>User: {user}</h1>

      <button onClick={() => setUser("CV")}>
        Change User
      </button>
    </div>
  );
}

export default App;