import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Users({ names }) {
  const [user, setUsers] = useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:1234/getuser/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => console.log("Data Not Saved"));
  }, []);

  console.log(names);

  let dd = localStorage.getItem("name");

  let data = user.filter((d) => d.name !== dd);
  return (
    <div>
      <h1>In Active Employees</h1>
      {data.map((d) => {
        return (
          <ul>
            <li style={{ listStyle: "none" }}>{d.name}</li>
          </ul>
        );
      })}

      <h1> Active Employees</h1>
      <h1> {dd}</h1>
    </div>
  );
}
