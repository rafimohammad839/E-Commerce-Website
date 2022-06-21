/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./routes/home/home.component";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>This is a Shop component</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} /> {/*/home/shop */}
        <Route path="sign-in" element={<SignIn />} /> 
      </Route>
    </Routes>
  );
};

export default App;
