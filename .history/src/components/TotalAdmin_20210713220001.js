import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import  firebase from "firebase" 
import "firebase/firestore"
import moment from 'moment'




export default function TotalAdmin() {

  var SomeDateString=moment().format("DD/MM/YYYY")

  
  const [cust, setCust] = useState()
  async   function countCust(){
      let i=0
         const custRef = await firebase.firestore().collection("admins").get()
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
      <Title>Total Admins</Title>
      <Typography  component="h1" variant="h2">
        {cust}
      </Typography> 
      <Typography variant="h6" color="textSecondary">
      {SomeDateString}
      </Typography>
    
    </React.Fragment>
  );
}