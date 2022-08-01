import React, { FC, ReactNode, useContext, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import MyButton from './Components/Buttons/MyButton';
import Navigation from './Components/Navigation/Navigation';
import Sidebar from './Components/Sidebar/Sidebar';
import { Navigate, Route, RouteProps, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Homepage from './Pages/Homepage';
import Notfoundpage from './Pages/NotFoundPage';
import AuthPage from './Pages/AuthPage';
import { AuthContext } from './AuthContext';
import { ReactFCWithChildren } from './Shared/types';
import LoginPage from './Pages/LoginPage';
import ProtectedRoutes from './ProtectedRoute';
import RegisterPage from './Pages/RegisterPage';
import CampaingsPage from './Pages/CampaingsPage';
import UpdateCampaingPage from './Pages/UpdateCampaingPage';
import WatchCampaingPage from './Pages/WatchCampaingPage';

function App() {
  const [isAuth,setIsAuth]=useState(false)
  

  return (
    <>
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
    <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/registration' element={<RegisterPage/>}/>
        <Route path='*' element={<Notfoundpage/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/campaing' element={<CampaingsPage/>}></Route>
          <Route path='/campaing/:id' element={<WatchCampaingPage/>}/>
          <Route path='/updateCampaing/:id' element={<UpdateCampaingPage/>}/>
        </Route>
    </Routes>
    </AuthContext.Provider>
    </>
  );
}

export default App;
