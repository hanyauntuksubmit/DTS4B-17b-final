import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {
  apiKey: "AIzaSyCi1Z_d5HDb--ATRkJYCz716sL4byjBuHY",
  authDomain: "react-news-d50c3.firebaseapp.com",
  projectId: "react-news-d50c3",
  storageBucket: "react-news-d50c3.appspot.com",
  messagingSenderId: "74837863426",
  appId: "1:74837863426:web:aaa36ecd1efb5f350a4b1b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };