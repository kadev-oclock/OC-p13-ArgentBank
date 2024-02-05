import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import User from "./pages/User";
import { Logout } from "./pages/Logout";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
