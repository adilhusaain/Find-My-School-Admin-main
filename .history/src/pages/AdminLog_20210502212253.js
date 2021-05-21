import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import firebase from 'firebase/app'
import 'firebase/firestore'


// Generate Order Data
function createData(id, name, catagory, city, rating, address, location, contact, otiming, ctiming, img) {
  return { id, name, catagory, city, rating, address, location, contact, otiming, ctiming, img };
}

const rows = [
  createData(0, 'Kips School', 'Matriculation', 'Multan ', '5', 'abc', 'blah', '030094758', '7:30', '5:30', 'null' ),
  createData(1, 'Punjab School','Matriculation','Lahore ', '4', 'abc', 'blah','030094758', '7:30', '5:30', 'null'  ),
  createData(2, 'Multan School', 'Matriculation', 'Multan ', '5', 'abc', 'blah', '030094758', '7:30', '5:30', 'null'  ),
  createData(3, 'Kips School', 'O/Levels', 'Multan ', '3', 'abc', 'blah', '030094758', '7:30', '5:30', 'null'  ),
  createData(4, 'Kips School', 'Matriculation', 'Multan ', '5', 'abc', 'blah', '030094758', '7:30', '5:30', 'null'  ),
  createData(5, 'Kips School', 'Matriculation', 'Multan ', '6', 'abc', 'blah', '030094758', '7:30', '5:30', 'null'  ),
  createData(6, 'Kips School', 'Matriculation', 'Multan ', '5', 'abc', 'blah', '030094758', '7:30', '5:30', 'null'  ),
  createData(7, 'Kips School', 'Matriculation', 'Multan ', '5', 'abc', 'blah', '030094758', '7:30', '5:30', 'null'  ),
  
];


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function AdminLog() {
  const classes = useStyles();
  const[vote , setVote] = useState();
  async function countVote(){
    console.log("yr b ")
    const voteRef = await firebase.firestore().collection('institutes').get()
    setVote(voteRef.docs.map((doc)=>({id: doc.id , data: doc.data()})))
  }

  useEffect(() => {
     countVote();
  }, [])
  return (
    <React.Fragment>
      <Table size="large" >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Address</TableCell>
            
            <TableCell>Contact</TableCell>
        
          </TableRow>
        </TableHead>
        {vote && <TableBody>
          {vote.map((row) => (
                     <TableRow key={row.id}>
 <TableCell>{row.data.name}</TableCell>
 <TableCell>{row.data.rating}</TableCell>
 <TableCell>{row.data.address}</TableCell>
 <TableCell>{row.data.contactnumber}</TableCell>


           
            </TableRow>
          ))}
        </TableBody>}
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}