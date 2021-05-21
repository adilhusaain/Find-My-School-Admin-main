import React,{ useContext, useEffect, useState } from "react";

import AuthContext from '../context'
import Login from './LogIn'

import firebase from 'firebase/app'
import 'firebase/firestore'
import AppRouter from "./AppRouter";



const firebaseConfig = {
  apiKey: "AIzaSyCDKYhCMcYt-GwF_ZPOJM7ceStuEfGtleY",
  authDomain: "findmyschool1999.firebaseapp.com",
  projectId: "findmyschool1999",
  storageBucket: "findmyschool1999.appspot.com",
  messagingSenderId: "968334332726",
  appId: "1:968334332726:web:08d07eca2dd0b9ac5f5997",
  measurementId: "G-TBQW3ZZ6FS"
};
function App() {
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    console.log("connected")

  }
 
  
  const [user , setUser] = useState()
  const authContext = useContext(AuthContext)
  
  
  function getUser() {
    const u = localStorage.getItem('users')
    if(u==null || u=='') {
      console.log('no user')
      return
    }
    const us = JSON.parse(u)
    setUser(us)
    console.log(user)
    
  }
  
  useEffect(() => {
    
    // localStorage.setItem('webpath',"http://localhost:3000/")

    getUser()
}, [])

  return (<AuthContext.Provider value = {{user, setUser}}>
    {user ?<AppRouter/>:<Login/>}
  </AuthContext.Provider>);
}

export default App;
