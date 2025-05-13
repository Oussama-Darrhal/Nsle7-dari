import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Home from "./pages/website/home";
import Login from "./auth/login";
import Register from "./auth/register";
import { Toaster } from "react-hot-toast";
import Layout from "./layout";

// Simple layout component
const Layout = ({ children }) => (
  <div>
    {children}
  </div>
);

// AuthRoute component to prevent logged-in users from accessing auth pages
const AuthRoute = ({ element }) => {
  // This is a simplified version - replace with your actual auth logic
  const isAuthenticated = false; // Replace with your actual auth check
  
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return element;
};

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
