import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Chat from "./core/Chat";
import Login from "./core/Login";
import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';

export default function App() {
  // const [username, setUsername] = useState(null);
  return (
    <Router>
      <nav>
        <Link to="/" element={<Login />}>Login</Link>
        <Link to="/chat" element={<Chat  />}>Chat Room</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login  />} />
        <Route path="/chat" element={<Chat  />} />
      </Routes>
      </Router>
  );
}


// function App() {
//   return (
//     <div>
//       <Login />
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <Chat/>
//     </div>
//   );
// }


