import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button, MenuItem } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import firebase from "firebase";
import "firebase/firestore";
import { cities } from "../components/CitiesOfPakistan";
import "firebase/storage";
import { Photo } from "@material-ui/icons";
import { LinkContainer } from 'react-router-bootstrap'
import * as Yup from "yup";
import SaveIcon from '@material-ui/icons/Save';



const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

export default function UpdateInstitute({match}) {
  const classes = useStyles();
  const id = String(match.params.id).toString()
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [listings , setListings] = useState("")

  function handleChange(e) {
    setFile(e.target.files[0]);
    console.log("hello");
    console.log(file);
  }

  async function handleUpload(values) {
    if (file == null) {
      alert("Please Select an Image");
      return;
    }

    const uploadTask = await firebase
      .storage()
      .ref(`/images/${file.name}`)
      .put(file);

    const urr = await firebase
      .storage()
      .ref("images")
      .child(file.name)
      .getDownloadURL();
    values.image = urr;

    Register(values);
  }

  async function Register(value) {
    
    setLoading(true);
    await firebase.firestore().collection("test").add(value);
    alert("Done!");
  }
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  function validateName(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (value <= 3) {
      error = "Please enter Correct Name";
      console.log(error);
    }
    return error;
  }
  async function loadData(){
      const userRef = firebase.firestore().collection('test').doc(id).get().then((snapshot)=>{
          console.log(snapshot.data())
          setListings({data:snapshot.data()})

          
      })
      console.log(userRef.data)  
  }
  useEffect(()=>{
loadData();
  },[])
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  function validateUsername(value) {
    let error;
    if (value === "admin") {
      error = "Nice try!";
    }
    return error;
  }

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    instituteName: Yup.string()
      .min(10, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    curriculam: Yup.string()
      .min(150, "Should be Greater then 150 Characters")
      .required("Required"),

    address: Yup.string()
      .min(10, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),

    contact: Yup.string()
      .min(10, "Phone Number should be 11 character Long")
      .max(10, "Phone Number contains more characters")
      .required("Required"),

    webUrl: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please enter website"),


      location:Yup.string()
      .matches(
        /((https?):\/\/)?(goo.gl.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct Location!"
      )
      .required("Please enter valid location"),

  });
  return (
      <>{listings && <Formik
      initialValues={{
        instituteName: listings.data?.instituteName ,
        catagory: listings.data?.catagory,
        rating: listings.data?.rating,
        city: listings.data?.city,
        province: listings.data?.province,
        sector: listings.data?.sector,
        address: listings.data?.address,
        contact: listings.data?.contact,
        location: listings.data?.location,
        image: listings.data?.image,
        bg: listings.data?.bg,
        lowerFeeRange: listings.data?.lowerFeeRange ,
        upperFeeRange: listings.data?.upperFeeRange,
        feeDetails: listings.data?.feeDetails,
        openingTiming: listings.data?.openingTiming,
        closingTiming: listings.data?.closingTiming,
        fridayTiming: listings.data?.fridayTiming,
        webUrl: listings.data?.webUrl,
        curriculam: listings.data?.curriculam,
      }}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={(values) => {
        Register(values)
      }}
    >
      {({ errors, touched }) => (
        <Form className={classes.form} noValidate>
          <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Field
                component={TextField}
                variant="outlined"
                label="Institute Name"
                disabled={false}
                fullWidth
                name="instituteName"
                //value={listings.data?.name}
                
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
                //value={listings.data?.catagory}
                InputLableProps={{
                  shrink: true,
                }}
              >
                <MenuItem value="Matriculation">Matriculation</MenuItem>
                <MenuItem value="O/A Levels">O/A Levels</MenuItem>
                <MenuItem value="Islamic">Islamic</MenuItem>
                <MenuItem value="Primary">Primary</MenuItem>
                <MenuItem value="Matriculation & O/A Levels">
                  Matriculation & O/A Levels
                </MenuItem>
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
                //value={listings.data?.rating}
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
                //value={listings.data?.city}
                InputLableProps={{
                  shrink: true,
                }}
              >
                {cities.map((option) => (
                  <MenuItem value={option.city}>{option.city}</MenuItem>
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
                //default value={listings.data?.province}
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
                //value={listings.data?.sector}
                InputLableProps={{
                  shrink: true,
                }}
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Private">Semi-Government</MenuItem>
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
                //value={listings.data?.address}
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
                type = "number"
                //value={listings.data?.contact}
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
                //value={listings.data?.location}
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Button
                onClick={handleClick}
                

                variant="contained"
                color="inherit"
                fullWidth
                startIcon={<Photo />}
              >
                Choose School Logo
                <input
                  type="file"
                  accept="image/*"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
               
              </Button>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Button
                onClick={handleClick}
                style={{ marginTop: 10 }}
                variant="contained"
                color="inherit"
                fullWidth
                startIcon={<Photo />}
                disabled={loading}
              >
                Choose School Image
                <input
                  type="file"
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  ref={hiddenFileInput}
                  onChange={handleChange}

                  style={{ display: "none" }}
                />
                {/* <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleChange}
            /> */}
              </Button>
            </Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Field
                component={TextField}
                variant="outlined"
                disabled={false}
                fullWidth
                name="lowerFeeRange"
                label="Lower Fee range"
                id="select"
                select
                //value={listings.data?.lowerFeeRange}
                InputLableProps={{
                  shrink: true,
                }}
              >
                <MenuItem value={1000}>1000</MenuItem>
                <MenuItem value={1500}>1500</MenuItem>
                <MenuItem value={2000}>2000</MenuItem>
                <MenuItem value={2500}>2500</MenuItem>
                <MenuItem value={2700}>2700</MenuItem>
                <MenuItem value={3000}>3000</MenuItem>
              </Field>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Field
                component={TextField}
                variant="outlined"
                disabled={false}
                fullWidth
                name="upperFeeRange"
                label="Upper Fee range"
                id="select"
                select
                //value={listings.data?.upperFeeRange}
                InputLableProps={{
                  shrink: true,
                }}
              >
                <MenuItem value={3500}>3500</MenuItem>
                <MenuItem value={4000}>4000</MenuItem>
                <MenuItem value={5000}>5000</MenuItem>
                <MenuItem value={6000}>6000</MenuItem>
                <MenuItem value={7000}>7000</MenuItem>
                <MenuItem value={8000}>8000</MenuItem>
                <MenuItem value={9000}>9000</MenuItem>
                <MenuItem value={10000}>10000</MenuItem>
                <MenuItem value={12000}>12000</MenuItem>
                <MenuItem value={15000}>15000</MenuItem>
                <MenuItem value={20000}>20000</MenuItem>
              </Field>
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
                //value={listings.data?.feeDetails}
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
                //value={listings.data?.openingTiming}
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
                //value={listings.data?.closingTiming}
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
                //value={listings.data?.fridayTiming}
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
                //value={listings.data?.webUrl}
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
                //value={listings.data?.curriculam}
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Button
                style={{ marginTop: 10 }}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<SaveIcon />}
                disabled={loading}
              >
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>}
    </>
  );
}
