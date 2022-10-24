import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Friends, Login, Logout, SignUp} from './pages';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}/>
    <Route index element={<Home />}/>
    <Route path="Home" element={<Home />} ></Route>
    <Route path="Login" element={<Login />} ></Route>
      <Route path="SignUp" element={ < SignUp />}> </Route>
      <Route path="Friends" element={ < Friends />}> </Route> 
      <Route path="Logout" element={ < Logout />}> </Route>   
    </Routes>
    </BrowserRouter> 
    </>);


