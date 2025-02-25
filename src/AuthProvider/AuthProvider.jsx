import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


 // create a new user with email and password (signup)
    const handleCreateUser = ( email , password ) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn User with email and password
    const handleSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout user
    const handleLogOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // update registered user profile
    const handleUpdateUserProfile = (name, photo) => {
        setLoading(true); 
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }

    // Get the currently signed-in user
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });

        return unsubscribe;
    },[])


    const authInfo = {
        handleCreateUser,
        user,
        setUser,
        loading,
        handleSignIn,
        handleLogOut,
        handleUpdateUserProfile,

    };

  return <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>;
};

export default AuthProvider;
