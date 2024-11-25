import { Routes, Route } from "react-router-dom";
import SignIn from "./layouts/signin";
import SignUp from "./layouts/signup";
import Dashboard from "./layouts/dashboard";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
