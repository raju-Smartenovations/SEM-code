import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formValues, setFormValues] = useState({
    name: "",
    number: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const submit = () => {
    const data = {
      name: formValues.name,
      number: formValues.number,
      password: formValues.password,
    };

    axios
      .post("http://localhost:1234/register/", data)
      .then(() => {
        console.log("Data Saved");
        return navigate("/");
      })
      .catch(() => console.log("Data Not Saved"));
  };
  
  return (
    <div>
      <h1>Register Page</h1>
      <input
        value={formValues.name}
        name="name"
        onChange={handleChange}
        placeholder="name"
      />
      <input
        value={formValues.number}
        name="number"
        onChange={handleChange}
        placeholder="number"
        maxLength={10}
      />
      <input
        value={formValues.password}
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="password"
      />
      <button onClick={submit}>Register</button>
    </div>
  );
}
