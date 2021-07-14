import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import firebase from 'firebase/app'
import 'firebase/firestore'
import {Button} from '@material-ui/core';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';


function preventDefault(event) {
  event.preventDefault();
}



export default function InstituteDetails() {
  const[inst , setInst] = useState();
  async function myInstitute(){
    console.log("yr b ")
    const instRef = await firebase.firestore().collection('test').get()
    setInst(instRef.docs.map((doc)=>({id: doc.id , data: doc.data()})))
  }

  useEffect(() => {
     myInstitute();
  }, ) //[inst]

  async function deleteInstitute(id){
    firebase.firestore().collection('test').doc(id).delete().then(alert("deleted")).catch((error)=>alert(error))
   
 }
  
 async function update(value){
      
  const userRef = await firebase.firestore().collection('test').doc(id).get()
  console.log(userRef.data())
  
  if(!userRef.empty){
    await firebase.firestore().collection('test').doc(id).update(value)
    alert ('Done!')
    
  }
  
 }
  return (
    <React.Fragment>
      <Table size="small" >
        <TableHead>
          <TableRow>
          <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
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
            <TableCell>Normal Timings</TableCell>
            <TableCell>Friday Timings</TableCell>
            <TableCell>Web URL</TableCell>
            <TableCell>Curriculum</TableCell>
            <TableCell>Action</TableCell>
        
          </TableRow>
        </TableHead>
        {inst && <TableBody>
          {inst.map((row) => (
                     <TableRow key={row.id}>
 <TableCell>{row.data.name}</TableCell>
 <TableCell>{row.data.category}</TableCell>
 <TableCell>{row.data.rating}</TableCell>
 <TableCell>{row.data.city}</TableCell>
 <TableCell>{row.data.province}</TableCell>
 <TableCell>{row.data.sector}</TableCell>
 <TableCell>{row.data.address}</TableCell>
 <TableCell>{row.data.contactnumber}</TableCell>
 <TableCell>{row.data.location}</TableCell>
 <TableCell>{row.data.image}</TableCell>
 <TableCell>{row.data.bg}</TableCell>
 <TableCell>{row.data.lowerfeerange}</TableCell>
 <TableCell>{row.data.upperfeerange}</TableCell>
 <TableCell>{row.data.feedetails}</TableCell>
 <TableCell>{row.data.openingtiming}</TableCell>
 <TableCell>{row.data.normaltiming}</TableCell>
 <TableCell>{row.data.fridaytiming}</TableCell>
 <TableCell>{row.data.webUrl}</TableCell>
 <TableCell>{row.data.curriculum}</TableCell>
 <TableCell> 
     <Button  color="secondary" onClick={()=> {deleteInstitute(row.id)}} >Delete</Button> 
     <LinkContainer to={`/UpdateInstitute/${row.id}`}>
     <Button className='btn-sm' color= "primary">
                        Update
                      </Button>
                    </LinkContainer> 

 </TableCell>




           
            </TableRow>
          ))}
        </TableBody>}
      </Table>
     
    </React.Fragment>
  );
}