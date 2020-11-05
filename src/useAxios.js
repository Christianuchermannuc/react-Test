import React, { useState } from "react";
import axios from "axios";
import  {useAxios } from './useAxios'
export default function useAxios() {
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

  return {
    user,
    onClickHandel
  };
}
