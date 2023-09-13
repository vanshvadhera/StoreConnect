import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLanding from "./Components/AppLanding/AppLanding";
import UserComponent from "./Components/UI/UserComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserComponent><AppLanding /></UserComponent>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
