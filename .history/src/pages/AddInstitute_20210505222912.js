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
        location:"",
        image:"",
        bg:"",
        lowerFeeRange:"",
        upperFeeRange:"",
        feeDetails:"",
        openingTiming:"",
        closingTiming:"",
        fridayTiming:"",
        webUrl:"",
        curriculam:"",
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
                fullWidth
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
                fullWidth
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
                fullWidth
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
                fullWidth
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
                fullWidth
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
                fullWidth
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
                fullWidth
                name="contact"
                
              />
            </Grid>

            <Grid item xs={1}></Grid>
          <Grid item xs={3}>
              <Field
                component={TextField}
                variant="outlined"
                label="Location"
                disabled={false}
                fullWidth
                name="location"
                
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Field
                variant="outlined"
                component={TextField}
                id="select"
                disabled={false}
                fullWidth
                label="Image"
                name="image"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Field
                component={TextField}
                variant="outlined"
                disabled={false}
                fullWidth
                name="bg"
                label="Background Image"
              />
            </Grid>

            <Grid item xs={1}></Grid>
          <Grid item xs={3}>
              <Field
                component={TextField}
                variant="outlined"
                label="Lower Fee Range"
                disabled={false}
                fullWidth
                name="lowerFeeRange"
                
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Field
                variant="outlined"
                component={TextField}
                id="select"
                disabled={false}
                fullWidth
                label="Upper Fee Range"
                name="upperFeeRange"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Field
                component={TextField}
                variant="outlined"
                disabled={false}
                fullWidth
                name="feeDetails"
                label="Fee Details"
              />
            </Grid>
         
            <Grid item xs={1}></Grid>
          <Grid item xs={3}>
              <Field
                component={TextField}
                variant="outlined"
                label="Opening Timing"
                disabled={false}
                fullWidth
                name="openingTiming"
                
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Field
                variant="outlined"
                component={TextField}
                id="select"
                disabled={false}
                fullWidth
                label="Closing Timing"
                name="closingTiming"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Field
                component={TextField}
                variant="outlined"
                disabled={false}
                fullWidth
                name="fridayTiming"
                label="Friday Timing"
              />
            </Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Field
                variant="outlined"
                component={TextField}
                id="select"
                disabled={false}
                fullWidth
                label="Web Url"
                name="webUrl"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Field
                component={TextField}
                variant="outlined"
                disabled={false}
                fullWidth
                name="curriculam"
                label="Curriculam"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
            <Button
          style={{marginTop:10}}
            //type="submit"
            variant="contained"
            color="primary"
            fullWidth
            //className={classes.submit}
          >
            Add institute
          </Button>

            </Grid>
         
          </Grid>

        </Form>

       
    
      
   )}
    </Formik>
      
  );
}