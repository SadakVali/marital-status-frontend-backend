import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StatusForm from "./pages/StatusForm";
import MarriageInfo from "./pages/MarriageInfo";
import SpouseConfirmation from "./pages/SpouseConfirmation";
import Congratulations from "./pages/Congratulations";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F0F] w-full">
      <Navbar />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/login" element=<Login /> />
        <Route path="/signup" element=<Signup /> />
        <Route path="/about" element=<About /> />
        <Route path="/contact" element=<Contact /> />
        <Route path="/check-marital-status-form" element=<StatusForm /> />
        <Route path="/spouse-confirmation" element=<SpouseConfirmation /> />
        <Route path="/spouse-marriage-info" element=<MarriageInfo /> />
        <Route path="/congratulations" element=<Congratulations /> />
      </Routes>
    </div>
  );
}

export default App;
