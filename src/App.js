
import React, { useState, useEffect } from "react";
import Pages from "./pages";

<<<<<<< HEAD


=======
>>>>>>> 4f2dd07ef291f3a0c2dbc9facf4ccc4209d4be2e
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // NOTE: Use your username below

    fetch("https://gitconnected.com/v1/portfolio/abhishekalekar")
      .then((res) => res.json())
      .then((user) => {

        setUser(user);
      });
  }, []);

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

<<<<<<< HEAD

=======
>>>>>>> 4f2dd07ef291f3a0c2dbc9facf4ccc4209d4be2e
export default App;

