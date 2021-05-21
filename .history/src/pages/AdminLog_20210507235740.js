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
            <TableCell>Contact</TableCell>
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
        {vote && <TableBody>
          {vote.map((row) => (
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