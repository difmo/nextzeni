import React, { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../../firebase"; // Firebase auth module
import Loader from "../../components/Loader";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user || null);

      // Add 2-second delay before setting loading to false
      const delay = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(delay); // Cleanup the timeout
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={{ user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
