import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';  // Assuming you're using Redux for authentication state
import axios from 'axios'
import Home from "./pages/website/home";
import Login from "./auth/login";
import Register from "./auth/register";

// PrivateRoute component to protect private routes
// const PrivateRoute = ({ element }) => {
//   const { token } = useSelector(state => state.auth);  // Access token from Redux store

//   console.log(token)
//   if (!token) {
//     return <Navigate to="/login" replace />;  // Redirect to login if not authenticated
//   }

//   return element;
// };

// AuthRoute component to prevent logged-in users from accessing auth pages
// const AuthRoute = ({ element }) => {
//   const { token , user } = useSelector(state => state.auth);  // Access token from Redux store
//   console.log(user)
//   if (token) {
//     return <Navigate to="/" replace />;  // Redirect to home if already logged in
//   }

//   return element;
// };

function App() {

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    
      <Routes>
        {/* Auth Routes (only accessible when not authenticated) */}
        <Route path="/login" element={<AuthRoute element={<Login />} />}/>
        <Route path="/register" element={<AuthRoute element={<Register />} />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<AuthRoute element={<Home />} />} />

        </Route>

        {/* <Route path="/" element={<RoleRoute element={<Layout />} allowedRoles={['admin','customer']} />}>

        </Route>

        <Route path="/admin" element={<PrivateRoute element={<RoleRoute element={<AdminLayout />} allowedRoles={['admin']} />}/>}>

        </Route>
        
        <Route path="/manager" element={<PrivateRoute element={<RoleRoute element={<ManagerLayout />} allowedRoles={['admin', 'manager']} />}/>}>
          
        </Route> */}


        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </>
  )
}

export default App
