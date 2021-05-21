import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, CssBaseline, Container } from '@material-ui/core';

import { Field, Form, Formik } from 'formik';
import { TextField } from "formik-material-ui";
import firebase from 'firebase';
import 'firebase/firestore'

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
   
      
      <Formik
       initialValues={{
        instituteName: "",
        email:"",
        password:"",

      }}
      onSubmit={(values) => {handleUpload(values)}}>

       {({ submitForm, isSubmitting }) => ( 
    
      
      
        <Form className={classes.form} noValidate>
          <Grid container spacing={3}
            justify="center"
            alignItems="center"
          >
          <Grid item xs={12}>
              <Field
                component={TextField}
                variant="outlined"
                label="Institute Name"
                disabled={false}

                name="instituteName"
                
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                variant="outlined"
                component={TextField}
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
                disabled={false}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
           
         
          <Button
          style={{marginTop:10}}
            //type="submit"
            variant="contained"
            color="primary"
            //className={classes.submit}
          >
            ADD
          </Button>

          </Grid>

        </Form>

       
    
      
   )}
    </Formik>
      
  );
}