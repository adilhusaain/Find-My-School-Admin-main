import React from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, MenuItem  } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
  TimePicker
  
} from 'formik-material-ui-pickers';
import {MuiPickersUtilsProvider
} from '@material-ui/pickers';

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
        openingTiming: new Date(),
        closingTiming: new Date(),
        fridayTiming: new Date(),
        webUrl:"",
        curriculam:"",
      }}
      onSubmit={(values) => {handleUpload(values)}}>

       {({ submitForm, isSubmitting }) => ( 
    
      
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
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
                select
                InputLableProps={{
                  shrink: true,
                }}
              >
            <MenuItem value="1">Matriculation</MenuItem>
            <MenuItem value="2">O/A Levels</MenuItem>
            <MenuItem value="3">Islamic</MenuItem>
            <MenuItem value="4">Primary</MenuItem>
            <MenuItem value="5">Matriculation & O/A Levels</MenuItem>
                </Field>
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
                select
                InputLableProps={{
                  shrink: true,
                }}
              >
            <MenuItem value="1">5.0</MenuItem>
            <MenuItem value="2">4.9</MenuItem>
            <MenuItem value="3">4.8</MenuItem>
            <MenuItem value="4">4.7</MenuItem>
            <MenuItem value="5">4.6</MenuItem>
            <MenuItem value="6">4.5</MenuItem>
            <MenuItem value="7">4.4</MenuItem>
            <MenuItem value="8">4.3</MenuItem>
            <MenuItem value="9">4.2</MenuItem>
            <MenuItem value="10">4.1</MenuItem>
            <MenuItem value="11">4.0</MenuItem>
            <MenuItem value="12">3.9</MenuItem>
            <MenuItem value="13">3.8</MenuItem>
            <MenuItem value="14">3.7</MenuItem>
            <MenuItem value="15">3.6</MenuItem>
            <MenuItem value="16">3.5</MenuItem>
                </Field>
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
                select
                InputLableProps={{
                  shrink: true,
                }}
              >
            <MenuItem value="1">Punjab</MenuItem>
            <MenuItem value="2">Sindh</MenuItem>
            <MenuItem value="3">KPK</MenuItem>
            <MenuItem value="4">Blochistan</MenuItem>
                </Field>
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
                select
                InputLableProps={{
                  shrink: true,
                }}
              >
            <MenuItem value="1">Public</MenuItem>
            <MenuItem value="2">Private</MenuItem>
                </Field>
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
          <KeyboardTimePicker
           variant="outlined"
           label="Opening Timing"
           disabled={false}
           fullWidth
           name="openingTiming"
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
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
        </MuiPickersUtilsProvider>
       
    
      
   )}
    </Formik>
      
  );
}