import React, { useState, createContext, useContext, useEffect } from "react";
import { useFormState } from "react-hook-form";

// Create the context 
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

	 // Using the useState hook to keep track of the value authed (if a 
   // user is logged in)
   const [authed, setAuthed] = useState(false);

   const login = async () => {
      const result = await fakeAsyncLogin();

      if (result) {
         console.log("user has logged in");

         setAuthed(true);
      }
   };

   const logout = async () => {
      const result = await fakeAsyncLogout();

      if (result) {
         console.log("The User has logged out");
         setAuthed(false);
      }
   };

   /// Mock Async Login API call.
   // TODO: Replace with your actual login API Call code
   const fakeAsyncLogin = async () => {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve("Logged In");
         }, 300);
      });
   };

   // Mock Async Logout API call.
   // TODO: Replace with your actual logout API Call code
   const fakeAsyncLogout = async () => {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve("The user has successfully logged on the server");
         }, 300);
      });
   };

   return (
			// Using the provider so that ANY component in our application can 
			// use the values that we are sending.
      <AuthContext.Provider value={{ authed, setAuthed, login, logout }}>
         {children}
      </AuthContext.Provider>
   );
};

// Finally creating the custom hook 
export const useAuth = () => useContext(AuthContext);