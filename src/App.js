import React from "react";
import Create from "./Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./Read";
import Update from "./Update";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
