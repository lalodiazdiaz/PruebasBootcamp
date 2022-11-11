import Login from "./componets/Log/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./componets/Dashboard/Dashboard";
import Home from "./componets/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/dashboard/:user" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
