import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { TextField } from "formik-material-ui";
import firebase from 'firebase';
import 'firebase/firestore'
import "firebase/storage"
import TelegramIcon from '@material-ui/icons/Telegram';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
 
  
}));

export default function PushNotification() {
  const classes = useStyles();
    
    
    
  

  async function Register(value){
    
    
      await firebase.firestore().collection('notifications').add(value)
      alert ('Done!')
    
  }



  return (
   
      
      <Formik
       initialValues={{
        title:"",
        message:"",
        
      }}
      onSubmit={(values) => {handleUpload(values)}}>

       {({ submitForm, isSubmitting }) => ( 
    
      
        <Form className={classes.form} noValidate>
          <Grid container spacing={3}
            justify="center"
            alignItems="center"
          >
               <Grid item xs={3}></Grid>
          <Grid item xs={6}>
              <Field
                component={TextField}
                variant="outlined"
                label="Title"
                fullWidth
                name="title"
                
              />
            </Grid>
            <Grid item xs={3}></Grid>

            <Grid item xs={3}></Grid>
            <Grid item xs={9}>
              <Field
                component={TextField}
                variant="outlined"
                label="Write your Message"
                fullWidth
                name="message"
                multiline
                rows={8}
              />
            </Grid>
            

            <Grid item xs={8}></Grid>
            <Grid item xs={4}>
            <Button
          style={{marginTop:10}}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            startIcon= { <TelegramIcon /> }
          >
            Send Message
          </Button>

            </Grid>
         
          </Grid>

        </Form>

    
      
   )}
    </Formik>
      
  );
}