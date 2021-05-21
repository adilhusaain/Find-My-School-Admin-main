import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';



export default function TotalAdmin() {
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
        25 April, 2021
      </Typography>
    
    </React.Fragment>
  );
}