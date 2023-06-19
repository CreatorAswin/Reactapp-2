import React from 'react'
import NavBar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Content from './Components/Content';
import Hello from './Components/Hello';
import Login from './Components/Forms/login';

const App = () => {

  // const names =['Aswin','Raju','Kumar','Manasa','Prathibha','avinash'];

  return (
   <div>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/foot" element={<Hello />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  
    </div>


  )
}

export default App;