// ./src/App.js
import {Route, Routes } from 'react-router-dom';
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./components/pages/Home.js";
import Videos from "./components/pages/Videos.js";
import Upload from "./components/pages/Upload.js";
import Projects from "./components/pages/Projects.js";
import { BrowserRouter } from "react-router-dom";
import SignUp from './components/pages/Login.js';
import Profile from './components/pages/Profile.js';
import Stop from './components/pages/Stop.js';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<SignUp />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/stop" element={<Stop/>}/>
        </Routes>
    </div>
  );
}

export default App;
