import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, IconButton } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { TextField } from "formik-material-ui";
import firebase from 'firebase';
import 'firebase/firestore'
import "firebase/storage"
import TelegramIcon from '@material-ui/icons/Telegram';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
 
  
}));

export default function PushNotification() {
  const classes = useStyles();
   const [success, setSuccess] = useState("")
   const [open, setOpen] = useState(true);
    
    
  
 async function Register(value){
    
    
      await firebase.firestore().collection('notifications').add(value)
      return setSuccess ("Your Message has been sent Successfully!")
    
  }



  return (
   
      
      <Formik
       initialValues={{
        title:"",
        message:"",
        
      }}
      onSubmit={(values) => {Register(values)}}>

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
            <Grid item xs={6}>
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
            <Grid item xs={3}></Grid>
          
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
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
            <Grid item xs={3}></Grid>
         
            <Grid item xs={3}></Grid>
          <Grid item xs={6}>
           {success && <Collapse in={open}>
             <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
      >
        {success}
      </Alert>
      </Collapse>
      }

      </Grid>
      <Grid item xs={3}></Grid>


          </Grid>

        </Form>

    
      
   )}
    </Formik>
      
  );
}