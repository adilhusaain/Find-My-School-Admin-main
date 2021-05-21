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
        instituteName:"",
        catagory:"",
        password:"",
        city:"",
        province:"",
        sector:"",
        address:"",
        contact:"",
      }}
      onSubmit={(values) => {handleUpload(values)}}>

       {({ submitForm, isSubmitting }) => ( 
    
      
      
        <Form className={classes.form} noValidate>
          <Grid container spacing={3}
            justify="center"
            alignItems="center"
          >
            <Grid item xs={1}></Grid>
          <Grid item xs={3}>
              <Field
                component={TextField}
                variant="outlined"
                label="Institute Name"
                disabled={false}

                name="instituteName"
                
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Field
                variant="outlined"
                component={TextField}
                id="select"
                disabled={false}
                label="Catagory"
                name="catagory"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Field
                component={TextField}
                variant="outlined"
                disabled={false}
                name="rating"
                label="Rating"
                id="select"
              />
            </Grid>


            <Grid item xs={1}></Grid>
          <Grid item xs={3}>
              <Field
                component={TextField}
                variant="outlined"
                label="City"
                disabled={false}
                id="select"
                name="city"
                
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Field
                variant="outlined"
                component={TextField}
                id="select"
                disabled={false}
                label="Province"
                name="province"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Field
                component={TextField}
                variant="outlined"
                disabled={false}
                name="sector"
                label="Sector"
                id="select"
              />
            </Grid>
           
            <Grid item xs={1}></Grid>
          <Grid item xs={7}>
              <Field
                component={TextField}
                variant="outlined"
                label="Address"
                disabled={false}
                fullWidth

                name="address"
                
              />
            </Grid>
            <Grid item xs={1}></Grid>
          <Grid item xs={3}>
              <Field
                component={TextField}
                variant="outlined"
                label="Contact"
                disabled={false}

                name="contact"
                
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