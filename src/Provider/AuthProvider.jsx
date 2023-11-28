import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signupUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authinfo = {
    auth,
    googleProvider,
    loginUser,
    user,
    logOutUser,
    signupUser,
  };
  return (
    <div>
      <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
