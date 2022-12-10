import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Routes,Route} from 'react-router-dom';
import {Home} from './components/index';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        {/* 

        <Route path="/register" element={ <Home/> }/>
        <Route path="/login" element={ <Home/> }/>
        <Route path="/login" element={ <Home/> }/>

         */}
      </Routes>
    </div>
  );
}

export default App;
