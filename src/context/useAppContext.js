import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import * as firebase from "firebase";
import { getCurrentUser } from "../utils/actions";
export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((credential) => {
      if (credential) {
        setUser(credential);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  //   console.log("user useeffect context", user);
  const values = useMemo(
    () => ({
      user,
    }),
    [user]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("Context doesn't exist");
  return context;
}

export default useAppContext;
