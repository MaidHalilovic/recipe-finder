import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='Nav' element={<Nav />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
