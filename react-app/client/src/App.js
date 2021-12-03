import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Chat from "./core/Chat";
import Login from "./core/Login";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/" element={<Login user="sagi"/>}>Login</Link>
        <Link to="/chat" element={<Chat />}>Chat Room</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
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


