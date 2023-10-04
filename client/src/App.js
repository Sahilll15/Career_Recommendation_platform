import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Sidebar from './components/Sidebar/Sidebar';
import PrivateRoutes from './utils/PrivateRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedInUser } from './redux/Auth/authSlice';
import { Toaster, toast } from 'sonner'
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Profile from './pages/Profile'
import Resume from './pages/Resume'
import Suggestion from './pages/Suggestion';
import Forgot from './pages/Auth/Forgot';



function App() {




  return (
    <>

      <Toaster richColors />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          
          



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
            <Route path="/suggestion" element={<Register />} />
          <Route path="/sug" element={<Suggestion />} />
          </Route>
        </Routes>
        {/* <BackToTopButton /> */}
      </Router>
    </>
  );
}

export default App;