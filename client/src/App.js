import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Sidebar from './components/Sidebar/Sidebar';
import PrivateRoutes from './utils/PrivateRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedInUser } from './redux/Auth/authSlice';
import Resume from './pages/Resume';
import Profile from './pages/Profile/Profile';
import { ToastContainer } from 'react-toastify';

import { Toaster, toast } from 'sonner'

import Home from './pages/Home';



function App() {




  return (
    <>

      <Toaster richColors />
      <Router>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />



          <Route
            path="/"
            element={
              <>
                <div className="flex">

                  <Sidebar />


                  <div className="flex-grow">
                    <ToastContainer richColors />
                    <PrivateRoutes />
                  </div>
                </div>
              </>
            }
          >

            <Route path="/" element={<Home />} />
            <Route path="/sidebar" element={<SideBar />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/profile" element={<Profile />} />

          </Route>

          <Route
            path="/"
            element={
              <>
                <div className="flex">

                  <div className="flex-grow">
                    <Toaster richColors />
                    <PrivateRoutes />
                  </div>
                </div>
              </>
            }
          >

          </Route>
        </Routes>
        {/* <BackToTopButton /> */}
      </Router>
    </>
  );
}

export default App;


