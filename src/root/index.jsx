import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom';
import navbar from '../utils/navbar';
import Navbar from '../components/Navbar';


export default function Root () {

  return <BrowserRouter>
    <Routes>
      <Route element={<Navbar />}>
        {
          navbar.map(({ id, path, element }) => {
            return <Route key={id} path={path} element={element} />
          })
        }
      </Route>
      <Route path='/' element={<Navigate to={'/acount'} />} />
      <Route path='*' element={<h1>404 Error</h1>} />
    </Routes>
  </BrowserRouter>
}
