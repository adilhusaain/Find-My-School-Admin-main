import React, { useEffect, useState } from 'react'
import  firebase from "firebase" 
import "firebase/firestore"
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import moment from 'moment'


export default function TotalInstitutes() {

  var SomeDateString=moment().format("DD/MM/YYYY")

  const [inst, setInst] = useState()
  async   function countCust(){
      let i=0
         const custRef = await firebase.firestore().collection("test").get()
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
      {SomeDateString}
      </Typography>
    
    </React.Fragment>
  );
}