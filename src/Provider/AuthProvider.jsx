import { createContext, useState } from "react";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
import {GoogleAuthProvider, getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const authinfo = {
      auth,
      googleProvider,
      loginUser,
      user,
    };
  return (
    <div>
      <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
