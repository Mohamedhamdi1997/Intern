import React from 'react';
import Gallery from './Gallery';
import Sidebar from './sidebar';
import './App.css';
import { BrowserRouter ,Routes, Route, Redirect } from 'react-router-dom';
function App() {
  
  return (
<div>

  

   <Sidebar />
   
            <Gallery className="gall" />
    
           
   </div>
  );
}

export default App;
