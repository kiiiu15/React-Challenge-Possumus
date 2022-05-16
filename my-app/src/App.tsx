import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ListPeople from './Hooks/ListPeople';
import DetailPerson from './Hooks/DetailPerson';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< ListPeople />} />
        <Route path="people" element={< ListPeople />} >
          <Route path=":id" element={<DetailPerson />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
