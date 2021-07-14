import React, { useEffect, useState } from 'react'
import  firebase from "firebase" 
import "firebase/firestore"
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import moment from 'moment'


export default function TotalUser() {

  var SomeDateString=moment().format("DD/MM/YYYY")

  const [user, setUser] = useState()

  async   function countUser(){
      let i=0
         const userRef = await firebase.firestore().collection("users").get()
         userRef.docs.forEach((element) => {
             i++
         });
         setUser(i)
     }
     useEffect(() => {
         countUser()
     }, [])

  return (
    <React.Fragment>
      <Title>Total Users</Title>
      <Typography  component="h1" variant="h2">
       {user}
      </Typography> 
      <Typography variant="h6" color="textSecondary">
      {SomeDateString}
      </Typography>
    
    </React.Fragment>
  );
}