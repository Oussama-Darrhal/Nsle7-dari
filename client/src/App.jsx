import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';  // Assuming you're using Redux for authentication state
import axios from 'axios'
import Home from "./pages/website/home";
import Login from "./auth/login";
import Register from "./auth/register";
import { Toaster } from "react-hot-toast";
import Layout from "./layout";

// Uncomment and use if you need to protect routes
// const PrivateRoute = ({ element }) => {
//   const { token } = useSelector(state => state.auth);  // Access token from Redux store
//   return token ? element : <Navigate to="/login" replace />;
// };

// const AuthRoute = ({ element }) => {
//   const { token } = useSelector(state => state.auth);
//   return token ? <Navigate to="/" replace /> : element;
// };

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Auth routes (uncomment if using auth logic) */}
        {/* 
        <Route path="/login" element={<AuthRoute element={<Login />} />} />
        <Route path="/register" element={<AuthRoute element={<Register />} />} />
        */}

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
