import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, MenuItem  } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { TextField } from "formik-material-ui";
import firebase from 'firebase';
import 'firebase/firestore'
import {cities} from "../components/CitiesOfPakistan"
import "firebase/storage"
import { Add } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
 
  
}));

export default function AddAdmin() {
  const classes = useStyles();

  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFile(e.target.files[0]);
    console.log("hello")
    console.log(file)
  }
  
  function handleChange2(e) {
    setFile2(e.target.files[0]);
    console.log("hello")
    console.log(file2)
  }

  async function handleUpload(values) {
    if(file == null){
      alert('Please Select an Image')
      return
    }
    
    const uploadTask = await firebase.storage().ref(`/images/${file.name}`).put(file);
    const uploadTask2 = await firebase.storage().ref(`/images/${file2.name}`).put(file2);

  
    const urr = await firebase.storage().ref("images")
    .child(file.name)
    .getDownloadURL()
    values.image = urr
    
    const urr2 = await firebase.storage().ref("images")
    .child(file2.name)
    .getDownloadURL()
    values.image = urr2
console.log(urr)
console.log(urr2)
    Register(values)
    
  }

  async function Register(value){
    
    setLoading(true)
      await firebase.firestore().collection('test').add(value)
      alert ('Done!')
    
  }



  return (
   
      
      <Formik
       initialValues={{
        instituteName:"",
        catagory:"",
        rating: "",
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
                select
                InputLableProps={{
                  shrink: true,
                }}
              >
            <MenuItem value="Matriculation">Matriculation</MenuItem>
            <MenuItem value="O/A Levels">O/A Levels</MenuItem>
            <MenuItem value="Islamic">Islamic</MenuItem>
            <MenuItem value="Primary">Primary</MenuItem>
            <MenuItem value="Matriculation & O/A Levels">Matriculation & O/A Levels</MenuItem>
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
            <MenuItem value={5.0}>5.0</MenuItem>
            <MenuItem value={4.9}>4.9</MenuItem>
            <MenuItem value={4.8}>4.8</MenuItem>
            <MenuItem value={4.7}>4.7</MenuItem>
            <MenuItem value={4.6}>4.6</MenuItem>
            <MenuItem value={4.5}>4.5</MenuItem>
            <MenuItem value={4.4}>4.4</MenuItem>
            <MenuItem value={4.3}>4.3</MenuItem>
            <MenuItem value={4.2}>4.2</MenuItem>
            <MenuItem value={4.1}>4.1</MenuItem>
            <MenuItem value={4.0}>4.0</MenuItem>
            <MenuItem value={3.9}>3.9</MenuItem>
            <MenuItem value={3.8}>3.8</MenuItem>
            <MenuItem value={3.7}>3.7</MenuItem>
            <MenuItem value={3.6}>3.6</MenuItem>
            <MenuItem value={3.5}>3.5</MenuItem>
            <MenuItem value={3.4}>3.4</MenuItem>
            <MenuItem value={3.3}>3.3</MenuItem>
            <MenuItem value={3.2}>3.2</MenuItem>
            <MenuItem value={3.1}>3.1</MenuItem>
            <MenuItem value={3.0}>3.0</MenuItem>
                </Field>
            </Grid>


            <Grid item xs={1}></Grid>
          <Grid item xs={3}>
              <Field
                component={TextField}
                variant="outlined"
                label="City"
                fullWidth
                id="select"
                name="city"
                select
                InputLableProps={{
                  shrink: true,
                }}
              >
                  {cities.map((option) => (
                <MenuItem value={option.city} >
                  {option.city}
                </MenuItem>
                ))}
                </Field>
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
            <MenuItem value="Punjab">Punjab</MenuItem>
            <MenuItem value="Sindh">Sindh</MenuItem>
            <MenuItem value="KPK">KPK</MenuItem>
            <MenuItem value="Blochistan">Blochistan</MenuItem>
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
            <MenuItem value="Public">Public</MenuItem>
            <MenuItem value="Private">Private</MenuItem>
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
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleChange}
            />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              type="file"
              onChange={handleChange2}
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
                label="Opening Timing"
                name="openingTiming"
                type="time"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                 shrink: true,
                }}
               inputProps={{
                 step: 300, // 5 min
                }}
              />
            </Grid> 
            <Grid item xs={1}></Grid>
             <Grid item xs={3}> 
             
                <Field
                component={TextField} 
                name="closingTiming" 
                label="Closing Timing"
                type="time"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                 shrink: true,
                }}
               inputProps={{
                 step: 300, // 5 min
                }}
                 />
            </Grid> 
            <Grid item xs={1}></Grid>
             <Grid item xs={3}>
              <Field
                component={TextField}
                name="fridayTiming"
                label="Friday Timing"
                type="time"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                 shrink: true,
                }}
               inputProps={{
                 step: 300, // 5 min
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
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            startIcon= { <Add /> }
            disabled= {loading}
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