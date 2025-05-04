import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Links from "./Links";
import TeamGrid from "./Team";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow pb-20 px-4 md:px-8">
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="/Team" element={<TeamGrid />} />
      </Routes>
      </main>
    </div>
    </Router>
  
  );
}

export default App;