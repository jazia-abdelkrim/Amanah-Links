import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Links from "./Links";
import Team from "./Team";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;