import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Form from './Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './Update'
import { Delete } from 'react-axios';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/app' element={<App/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/Delete/:id' element={<Delete/>}/>



      </Routes>
      </BrowserRouter>
      
    }
  </React.StrictMode>
);

