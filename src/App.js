<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Pages from "./pages";

=======
import React, { useState, useEffect } from 'react';
import Pages from './pages'
>>>>>>> 88a85b11d70a6c4d57e012e592830d77aef7b2c0

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // NOTE: Use your username below
<<<<<<< HEAD
    fetch("https://gitconnected.com/v1/portfolio/abhishekalekar")
      .then((res) => res.json())
      .then((user) => {
=======
    fetch('https://gitconnected.com/v1/portfolio/abhishekalekar')
      .then(res => res.json())
      .then(user => {
>>>>>>> 88a85b11d70a6c4d57e012e592830d77aef7b2c0
        setUser(user);
      });
  }, []);

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 88a85b11d70a6c4d57e012e592830d77aef7b2c0
