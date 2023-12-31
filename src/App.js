/** @format */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";


import Home from "./Pages/Home";
import Mint from "./Pages/mobile";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
