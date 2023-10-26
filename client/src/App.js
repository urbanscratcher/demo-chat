import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact Component={Join}></Route>
      <Route path="/chat" Component={Chat}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
