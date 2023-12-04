import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB4gdR9mi1LTdOlG8zCBASwsHuqVDmOZYc',
  authDomain: 'twitter-challenge-9a725.firebaseapp.com',
  projectId: 'twitter-challenge-9a725',
  storageBucket: 'twitter-challenge-9a725.appspot.com',
  messagingSenderId: '863256047430',
  appId: '1:863256047430:web:734f94052c6be042c63f47',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
