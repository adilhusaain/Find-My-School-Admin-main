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

function preventDefault(event) {
    event.preventDefault();
  }

export default function InstituteRequests() {

    const[vote , setVote] = useState();
    async function countVote(){
      console.log("yr b ")
      const voteRef = await firebase.firestore().collection('requests').get()
      setVote(voteRef.docs.map((doc)=>({id: doc.id , data: doc.data()})))
    }
  
    useEffect(() => {
       countVote();
    }, [])



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
              <TableCell>Action</TableCell>
          
            </TableRow>
          </TableHead>
          {vote && <TableBody>
            {vote.map((row) => (
                       <TableRow key={row.id}>
   <TableCell>{row.data.name}</TableCell>
   <TableCell>{row.data.category}</TableCell>
   <TableCell>{row.data.rating}</TableCell>
   <TableCell>{row.data.city}</TableCell>
   <TableCell>{row.data.province}</TableCell>
   <TableCell>{row.data.sector}</TableCell>
   <TableCell> <LinkContainer to={`//requestsdetails`}>
                      <Button className='btn-sm' color= "primary">
                        Details
                      </Button>
                    </LinkContainer>
   </TableCell>
             
              </TableRow>
            ))}
          </TableBody>}
        </Table>
       
      </React.Fragment>
    )
}
