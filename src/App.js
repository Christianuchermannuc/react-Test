import React, { useState } from "react";
import "./style.css";
import axios from "axios";

export default function App() {
  const [user, setUser] = useState([]);
  const onClickHandel = () => {
    console.log("har klikket");

    axios.get("https://ReplitExpress.magneka.repl.co/users2").then(res => {
      console.log("data: ", res.data);
      setUser(res.data);
    });
  };

  let respons = <div>ingen dta</div>;

  if (user) {
    respons = <ul>{user.map((item,index)=>(<li key={index}>{item.firstname}</li>))} </ul>
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={onClickHandel}> klikk meg </button>
      {respons}
    </div>
  );
}
