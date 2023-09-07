import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDYHgLngTVA3eRJhl_zh-8Jy1yLpl1jaWQ',
  authDomain: 'glamour-glow-d5a79.firebaseapp.com',
  projectId: 'glamour-glow-d5a79',
  storageBucket: 'glamour-glow-d5a79.appspot.com',
  messagingSenderId: '636538117931',
  appId: '1:636538117931:web:d89ea665b4e1e71d23ef6e'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
