import React, { useEffect, useState } from 'react'
import  firebase from "firebase" 
import "firebase/firestore"
import Typography from '@material-ui/core/Typography';
import Title from './Title';



export default function TotalUser() {
  const [cust, setCust] = useState()
  async   function countCust(){
      let i=0
         const custRef = await firebase.firestore().collection("users").get()
         custRef.docs.forEach((element) => {
             i++
         });
         setCust(i)
     }
     useEffect(() => {
         countCust()
     }, [])

  return (
    <React.Fragment>
      <Title>Total Users</Title>
      <Typography  component="h1" variant="h2">
       {cust}
      </Typography> 
      <Typography variant="h6" color="textSecondary">
      21 May, 2021
      </Typography>
    
    </React.Fragment>
  );
}