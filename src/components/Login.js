import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Users from "./users";

export default function Login() {
  const [formValues, setFormValues] = useState({
    name: "",
    password: "",
  });
  const [user, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const submit = () => {
    user.map((d) => {
      if (d.name == formValues.name && d.password == formValues.password) {
        return navigate("/users");
      }
      // else
      // {
      //   alert("wrong password")
      // }
    });
  };

  React.useEffect(() => {
    axios
      .get("http://localhost:1234/getuser/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => console.log("Data Not Saved"));
  }, []);

  console.log(user);
  localStorage.setItem("name", formValues.name);
  return (
    <div>
      <h1>Login Page</h1>

      <input
        value={formValues.name}
        name="name"
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        value={formValues.password}
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="Password"
      />
      <button onClick={submit}>Login</button>
    </div>
  );
}
