import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import navbar from '../utils/navbar';

export default function Root () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            navbar.map(({ path, element, id }) => {
              return <Route key={id} path={path} element={element} />;
            })
          }
          <Route path='/' element={<Navigate to={'language'} />} />
          <Route path='*' element={<h1>404 Not Founded</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
