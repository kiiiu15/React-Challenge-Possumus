import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import ListPeople from './Hooks/ListPeople';
import DetailPerson from './Hooks/DetailPerson';
import Navbar from './Hooks/Navbar';



function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Outlet />

      <Routes>
        <Route path="/" element={< ListPeople />} />

        <Route path="people" element={< ListPeople />} >
          <Route path=":id" element={<DetailPerson />} />
        </Route>


        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Oops! 404 Not Found!</p>
            </main>
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
