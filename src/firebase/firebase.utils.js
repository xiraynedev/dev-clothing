import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCvZosdpk-bpHC4-kMuP_BQOg1IEfhsFsU",
  authDomain: "dev-clothing-48d70.firebaseapp.com",
  databaseURL: "https://dev-clothing-48d70.firebaseio.com",
  projectId: "dev-clothing-48d70",
  storageBucket: "dev-clothing-48d70.appspot.com",
  messagingSenderId: "566483342117",
  appId: "1:566483342117:web:6b709501e32df793b5c0cc",
  measurementId: "G-JSQCYVT6V1"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export {firebase}