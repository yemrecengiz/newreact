import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import Screenj from './components/Screenj/Screen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-main">
        
        <div><Sidebar /></div>
        <div><Screenj /></div>
      </div>
      
      
    </div>
  );
}

export default App;
