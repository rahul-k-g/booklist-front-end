import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Booklist from './Components/Booklist';

function Routings() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/'  component={Signup} ></Route>
      <Route path='/login' exact component={Login} ></Route>
      <Route path='/register' exact component={Signup} ></Route>
      
      <Route path='/booklist' exact component={Booklist} ></Route>

    </Routes>
    
    
    </BrowserRouter>
  
    </>
  );
}

export default Routings;
