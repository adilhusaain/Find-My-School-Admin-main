import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import firebase from 'firebase/app'
import 'firebase/firestore'


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  fixedHeight: {
    height: 700,
  },
}));

export default function UserLog() {
  
  const [vote , setVote] = useState()
  
      async function countVote(){
        console.log("yr b ")
        const voteRef = await firebase.firestore().collection('users').get()
        setVote(voteRef.docs.map((doc)=>({id: doc.id , data: doc.data()})))
      }

      useEffect(() => {
         countVote();
      }, [])
  const classes = useStyles();
  return (
    <div className={classes.fixedHeight}>
      <Table size="small" >
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contact</TableCell>
            
          </TableRow>
        </TableHead>
        {vote &&<TableBody>
          {vote.map((row) => (
            <TableRow key={row.id}>
            <TableCell>{row.data.name}</TableCell>
            <TableCell>{row.data.email}</TableCell>
            <TableCell>{row.data.phone}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>}
      </Table>
     
   </div>
  );
}