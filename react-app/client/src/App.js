import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Chat from "./core/Chat";
import Login from "./core/Login";
import React, { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/chat" element={<Chat user={user} />} />
      </Routes>
    </Router>
  );
}