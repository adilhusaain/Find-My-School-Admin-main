import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import firebase from 'firebase/app'
import 'firebase/firestore'
import {Button} from '@material-ui/core';



function preventDefault(event) {
  event.preventDefault();
}


export default function AdminLog() {
  const[inst , setInst] = useState();
  async function myInstitute(){
    console.log("yr b ")
    const instRef = await firebase.firestore().collection('test').get()
    setInst(instRef.docs.map((doc)=>({id: doc.id , data: doc.data()})))
  }

  useEffect(() => {
     myInstitute();
  }, [inst])

  async function deleteInstitute(id){
    firebase.firestore().collection('test').doc(id).delete().then(alert("deleted")).catch((error)=>alert(error))
   
 }
  
  return (
    <React.Fragment>
      <Table size="small" >
        <TableHead>
          <TableRow>
          <TableCell>Institute Name</TableCell>
            <TableCell>Catagory</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Province</TableCell>
            <TableCell>Sector</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Background Image</TableCell>
            <TableCell>Lower Fee range</TableCell>
            <TableCell>Upper Fee Range</TableCell>
            <TableCell>Fee Details</TableCell>
            <TableCell>Opening Timings</TableCell>
            <TableCell>Closing Timings</TableCell>
            <TableCell>Friday Timings</TableCell>
            <TableCell>Web URL</TableCell>
            <TableCell>Curriculam</TableCell>
            <TableCell>Action</TableCell>
        
          </TableRow>
        </TableHead>
        {inst && <TableBody>
          {inst.map((row) => (
                     <TableRow key={row.id}>
 <TableCell>{row.data.instituteName}</TableCell>
 <TableCell>{row.data.catagory}</TableCell>
 <TableCell>{row.data.rating}</TableCell>
 <TableCell>{row.data.city}</TableCell>
 <TableCell>{row.data.province}</TableCell>
 <TableCell>{row.data.sector}</TableCell>
 <TableCell>{row.data.address}</TableCell>
 <TableCell>{row.data.contact}</TableCell>
 <TableCell>{row.data.location}</TableCell>
 <TableCell>{row.data.image}</TableCell>
 <TableCell>{row.data.bg}</TableCell>
 <TableCell>{row.data.lowerFeeRange}</TableCell>
 <TableCell>{row.data.upperFeeRange}</TableCell>
 <TableCell>{row.data.feeDetails}</TableCell>
 <TableCell>{row.data.openingTiming}</TableCell>
 <TableCell>{row.data.closingTiming}</TableCell>
 <TableCell>{row.data.fridayTiming}</TableCell>
 <TableCell>{row.data.webUrl}</TableCell>
 <TableCell>{row.data.curriculam}</TableCell>
 <TableCell> 
     <Button  color="secondary" onClick={()=> {deleteInstitute(row.id)}} >Delete</Button> 
     <Button  color="primary">Edit</Button> 
 </TableCell>




           
            </TableRow>
          ))}
        </TableBody>}
      </Table>
     
    </React.Fragment>
  );
}