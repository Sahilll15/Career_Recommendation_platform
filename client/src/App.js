import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { Toaster, toast } from 'sonner'
import PrivateRoutes from './utils/PrivateRoutes';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Toaster richColors />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRoutes />} >
          <Route path="/" element={<Home />} />
        </Route>


      </Routes>
    </Router>
  );
}

export default App;
