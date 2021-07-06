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



export default function RequestDetails() {
  const[inst , setInst] = useState();
  async function myInstitute(){
    console.log("yr b ")
    const instRef = await firebase.firestore().collection('requests').get()
    setInst(instRef.docs.map((doc)=>({id: doc.id , data: doc.data()})))
  }

  useEffect(() => {
     myInstitute();
  }, [inst])

  async function deleteInstitute(id){
    firebase.firestore().collection('requests').doc(id).delete().then(alert("deleted")).catch((error)=>alert(error))
   
 }

 async function approveInstitute(id) {
  await firebase.firestore().collection('requests').doc(id).get().then((value) => {

    var docData = {
      name : value.data().name,
      address: value.data().address,
      city: value.data().city,
      province: value.data().province,
      contact: value.data().contact,
      image: value.data().image,
      bg: value.data().bg,
      rating: value.data().rating,
      openingtiming: value.data().openingtiming,
      normaltiming: value.data().normaltiming,
      fridaytiming: value.data().fridaytiming,
      category: value.data().category,
      sector: value.data().sector,
      webUrl: value.data().webUrl,
      location: value.data().location,
      curriculum: value.data().curriculum,
      feedetails: value.data().feedetails,
      lowerfeerange: value.data().lowerfeerange,
      upperfeerange: value.data().upperfeerange,
    };

    firebase.firestore().collection("test").doc(id).set(docData).then(() => {
      console.log("Document successfully written!");
  });

  });
  await deleteInstitute(id);
//   let copyTo = firebase.firestore().collection('test').doc(id);


  
//   reqData.get().then((value) => {
//     var docData = {
//       name : value.data().name,
//       address: value.data().address,
//       city: value.data().city,
//       province: value.data().province,
//       contact: value.data().contact,
//       image: value.data().image,
//       bg: value.data().bg,
//       rating: value.data().rating,
//       openingtiming: value.data().openingtiming,
//       normaltiming: value.data().normaltiming,
//       fridaytiming: value.data().fridaytiming,
//       category: value.data().category,
//       sector: value.data().sector,
//       webUrl: value.data().webUrl,
//       location: value.data().location,
//       curriculum: value.data().curriculum,
//       feedetails: value.data().feedetails,
//       lowerfeerange: value.data().lowerfeerange,
//       upperfeerange: value.data().upperfeerange,
      
//   };
//   firebase.firestore().collection("test").doc(id).set(docData).then(() => {
//     console.log("Document successfully written!");
// });
//   });

  //await deleteInstitute(id);
    // const requests = await firestore().collection("requests").get();
    // requests.forEach(async (doc)=> {
    //     await firestore().collection(uid).doc(doc.get('barcode')).set(doc.data());
    // })
}

//  async function approveInstitute(id){
//     firebase.firestore().collection('requests').doc(id).delete().then(alert("deleted")).catch((error)=>alert(error))

//     firebase.firestore().collection('requests').doc(id).delete().then(alert("deleted")).catch((error)=>alert(error))
   
//  }
  
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
 <TableCell>{row.data.name}</TableCell>
 <TableCell>{row.data.category}</TableCell>
 <TableCell>{row.data.rating}</TableCell>
 <TableCell>{row.data.city}</TableCell>
 <TableCell>{row.data.province}</TableCell>
 <TableCell>{row.data.sector}</TableCell>
 <TableCell>{row.data.address}</TableCell>
 <TableCell>{row.data.contact}</TableCell>
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
     <Button  color="secondary" onClick={()=> {deleteInstitute(row.id)}} >Decline</Button> 
     <Button  color="primary" onClick= {()=> {approveInstitute(row.id)}}>Approve</Button> 
 </TableCell>




           
            </TableRow>
          ))}
        </TableBody>}
      </Table>
     
    </React.Fragment>
  );
}