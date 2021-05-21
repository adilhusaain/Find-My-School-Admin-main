import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, IconButton, CssBaseline, Container } from '@material-ui/core';
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
   const [loading, setLoading] = useState(false);
    
  
 async function Register(value){
    

    setLoading(true)

    
      const users = await firebase.firestore().collection('users')
      users.get().then((querySnapshot) => {
          const tempDoc = querySnapshot.docs.map((doc) =>  {
            //return {} id: doc.id, ...doc.data() 
             firebase.firestore().collection('users').doc(doc.id).collection("alerts").add(value)
             console.log(tempDoc)
             return setSuccess ("Your Message has been sent Successfully!")
            
          })
         
        })
    
     
    
  }



  return (
   
      
      <Formik
       initialValues={{
        title:"",
        message:"",
        
      }}
      onSubmit={(values) => {Register(values)}}>

       {({ submitForm, isSubmitting }) => ( 
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div  style={{alignContent:'center', justifyContent:"center",alignItems:"center", alignSelf:"center", marginLeft:300, marginRight:-400}}>
      
        <Form className={classes.form} noValidate>
          <Grid container spacing={3}
            justify="center"
            alignItems="center"
          >
          
         
  
               
          <Grid item xs={12}>
              <Field
                component={TextField}
                variant="outlined"
                label="Title"
                fullWidth
                name="title"
                
              />
            </Grid>
            
            <Grid item xs={12}>
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
           
          
            
            <Grid item xs={12}>
            <Button
          style={{marginTop:10}}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled= {loading}
            startIcon= { <TelegramIcon /> }
          >
            Send Message
          </Button>

            </Grid>
            
         
            
          <Grid item xs={12}>
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
        </div>
      
      </Container>
    
      
   )}
    </Formik>
      
  );
}