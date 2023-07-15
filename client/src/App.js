import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { Login } from "./components/Login";
import { Registration } from './components/Registration';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Registration/>} />
      </Routes>
    </Router>
    </>  
  );
}

export default App;
