import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAKWbxbSiEpKqJ4w9_jkeHEDdJb5fSLsZY",
  authDomain: "freemoni-consumer-dev-a6b4c.firebaseapp.com",
  databaseURL: "https://freemoni-consumer-dev-a6b4c.firebaseio.com",
  projectId: "freemoni-consumer-dev-a6b4c",
  storageBucket: "freemoni-consumer-dev-a6b4c.appspot.com",
  messagingSenderId: "762222987203",
  appId: "1:762222987203:web:6d46e9186360d6bdd99f76",
  measurementId: "G-RT1N0VFH72"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((credential)=> {
        const { isNewUser } = getAdditionalUserInfo(credential);
        return credential.user.getIdToken()
    })
    .then((token)=>{
        console.log(token)
    })
    .catch((error)=> console.log(error))
}