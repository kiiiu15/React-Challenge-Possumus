import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import {Navbar} from './Components/Navbar';
import Router from './Config/Router';


function App() {
  return (

    <BrowserRouter>
      <div className='bg-secondary'>
        <Navbar />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
