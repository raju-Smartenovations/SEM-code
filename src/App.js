import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import Register from "./components/Register";
import Login from "./components/Login";
import Users from "./components/users";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
            <Route path="/register" element={<Register />} /> 
            <Route path="login" element={<Login />} />
            <Route path="/users" element={<Users />} />

        </Routes>
      </BrowserRouter> 

    </div>
  );
}

export default App;
