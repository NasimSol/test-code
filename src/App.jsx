import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Component
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Profile from "./Sections/Profile/Profile";
import Protected from "./Private/Protected";
import { useAuth } from "./CustomHooks/useAuth";
import Error from "./Pages/Error";

function App() {
  const {authed}=useAuth();
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
         <Route path="*" element={<Error />} />
         <Route
           path="/profile"
           element={
           <Protected isLoggedIn={authed}>
              <Profile />
           </Protected>
                   }
/>
        </Routes>
        <ToastContainer
          position="top-left"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
      </>
    </Router>
  );
}

export default App;
