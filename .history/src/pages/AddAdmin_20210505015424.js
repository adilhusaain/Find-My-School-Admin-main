import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, CssBaseline, Container } from '@material-ui/core';

import { Field, Form, Formik } from 'formik';
import { TextField } from "formik-material-ui";
import firebase from 'firebase';
import 'firebase/firestore'
//
//import {useAuth} from '../context/AuthContext'


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
 
  
}));

export default function AddAdmin() {
  const classes = useStyles();

  async function handleUpload(value){
    const userRef = await firebase.firestore().collection('admins').where('email','==',value.email).get()
    
    alert(userRef.empty)
    if(userRef.empty){
      await firebase.firestore().collection('admins').add(value)
      alert ('Done!')
      
    }
    else{
     alert ('Already Registered!')
     
    }
  }



  return (
   
      // <form className={classes.root} >
      //   <Grid container spacing={3}
      //   justify="center"
      //   alignItems="center"
      //   >
         
      //   <Grid item xs={4}></Grid>
      //   <Grid item xs={4} >
      //   <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth required />
      //   </Grid>
      //     <Grid item xs={4}></Grid>

      //     <Grid item xs={4}></Grid>
      //   <Grid item xs={4}>
      //      <TextField label="Email" variant="outlined" type="email" fullWidth required />
      //   </Grid>
      //   <Grid item xs={4}></Grid>

      //   <Grid item xs={4}></Grid>
      //   <Grid item xs={4}>
      //      <TextField label="Password" variant="outlined"  type="password" fullWidth required />
      //   </Grid>
      //   <Grid item xs={4}></Grid>

      //   <Grid item xs={4}></Grid>
      //   <Grid item xs={4}>
      //      <TextField label="Confirm Password" variant="outlined"  type="password" fullWidth required />
      //   </Grid>
      //   <Grid item xs={4}></Grid>

      //   <Grid item xs={4}></Grid>
      //   <Grid item xs={4}>
      //   <Button variant="contained" color="primary"  fullWidth endIcon= { <Add/> }> Add </Button>
      //   </Grid>
      //   <Grid item xs={4}></Grid>

      //   </Grid>
      // </form>
      <Formik
       initialValues={{
        usertName: "",
        email:"",
        password:"",

      }}
      onSubmit={(values) => {handleUpload(values)}}>

       {({ submitForm, isSubmitting }) => ( 
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div  style={{alignContent:'center', justifyContent:"center",alignItems:"center", alignSelf:"center", marginLeft:300, marginRight:-400}}>
      
        <Form className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <Field
                component={TextField}
                variant="outlined"
                fullWidth
                label="UserName"
                disabled={false}

                name="userName"
                
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                variant="outlined"
                component={TextField}
                fullWidth
                id="email"
                disabled={false}

                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                variant="outlined"
                fullWidth
                disabled={false}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
           
          </Grid>
          <Button
          style={{marginTop:10}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ADD
          </Button>
          
        </Form>
      </div>
      
    </Container>)}
    </Formik>
      
  );
}