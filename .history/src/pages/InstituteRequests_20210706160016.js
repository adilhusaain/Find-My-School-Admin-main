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

export default function InstituteRequests() {

    const[vote , setVote] = useState();
    async function countVote(){
      console.log("yr b ")
      const voteRef = await firebase.firestore().collection('test').get()
      setVote(voteRef.docs.map((doc)=>({id: doc.id , data: doc.data()})))
    }
  
    useEffect(() => {
       countVote();
    }, [])



    return (
        <div>
            
        </div>
    )
}
