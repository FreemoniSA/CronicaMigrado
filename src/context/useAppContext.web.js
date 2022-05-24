import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
} from "react";
//   import auth from '@react-native-firebase/auth';
import { app, auth } from "../../Firebase";
import { onAuthStateChanged, getIdToken } from "firebase/auth";
export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [accountUser, setAccountUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log("dataUser effecto", user);
      setUser(user);
    });
    return unsub;
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const token = await auth.currentUser.getIdToken();
        console.log("token", token);
      } catch (error) {
        console.log("error token", error);
      }
    })();
  }, [user]);

  console.log("user", user);

  const values = useMemo(
    () => ({
      user,
      userData,
      setUserData,
      setAccountUser,
      accountUser,
    }),
    [user, userData, accountUser]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("Context doesn't exist");
  return context;
}

export default useAppContext;
