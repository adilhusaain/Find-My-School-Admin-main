import React, { useEffect, useState } from 'react'
import  firebase from "firebase" 
import "firebase/firestore"
import Typography from '@material-ui/core/Typography';
import Title from './Title';



export default function TotalInstitutes() {
  const [inst, setInst] = useState()
  async   function countCust(){
      let i=0
         const custRef = await firebase.firestore().collection("institutes").get()
         custRef.docs.forEach((element) => {
             i++
         });
         setInst(i)
     }
     useEffect(() => {
         countCust()
     }, [])

  return (
    <React.Fragment>
      <Title>Total Institutes</Title>
      <Typography  component="h1" variant="h2">
       {inst}
      </Typography> 
      <Typography variant="h6" color="textSecondary">
        25 April, 2021
      </Typography>
    
    </React.Fragment>
  );
}