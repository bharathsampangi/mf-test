import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import Home from "./home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mftest" element={<Home />} />
        <Route path="/mftest/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
