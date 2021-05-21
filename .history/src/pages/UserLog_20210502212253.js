import React,{useEffect,useState} from 'react';
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
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719'),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574'),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253'),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000'),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
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
    <React.Fragment>
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
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}