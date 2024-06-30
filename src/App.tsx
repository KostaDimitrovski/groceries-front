import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
   <>
       <Routes>
           <Route path="/" element={<HomePage/>}/>
           <Route path="/Login" element={<Login/>}/>
           <Route path="/Register" element={<Register/>}/>
       </Routes>
   </>
  );
}

export default App;
