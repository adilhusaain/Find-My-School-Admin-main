import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button, MenuItem } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import firebase from "firebase";
import "firebase/firestore";
import { cities } from "../components/CitiesOfPakistan";
import "firebase/storage";
import { Add, Photo } from "@material-ui/icons";
import { LinkContainer } from 'react-router-bootstrap'
import * as Yup from "yup";


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
    console.log("hello");
    console.log(file);
  }

  function handleChange2(e) {
    setFile2(e.target.files[0]);
    console.log("hello");
    console.log(file2);
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

  async function handleUpload2(values) {
    if (file2 == null) {
      alert("Please Select an Image2");
      return;
    }
    
    const uploadTask = await firebase
      .storage()
      .ref(`/images/${file2.name}`)
      .put(file2);

    const urr = await firebase
      .storage()
      .ref("images")
      .child(file2.name)
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
  const hiddenFileInput2 = React.useRef(null);
  const handleClick2 = (event) => {
    hiddenFileInput2.current.click();
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
    name: Yup.string()
      .min(10, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    curriculum: Yup.string()
      .min(150, "Should be Greater then 150 Characters")
      .required("Required"),

    address: Yup.string()
      .min(10, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),

    contactnumber: Yup.string()
      .min(10, "Phone Number should be 11 character Long")
      .max(11, "Phone Number contains more characters")
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
    <Formik
      initialValues={{
        name: "",
        category: "",
        rating: "",
        city: "",
        province: "",
        sector: "",
        address: "",
        contactnumber: "",
        location: "",
        image: "",
        bg: "",
        lowerfeerange: "",
        upperfeerange: "",
        feedetails: "",
        openingtiming: "",
        normaltiming: "",
        fridaytiming: "",
        webUrl: "",
        curriculum: "",
      }}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={(values) => {
        handleUpload(values);
        handleUpload2(values);
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
                label="Name"
                disabled={false}
                fullWidth
                name="name"
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
                label="Category"
                name="category"
                select
                InputLableProps={{
                  shrink: true,
                }}
              >
                <MenuItem value="Matriculation">Matriculation</MenuItem>
                <MenuItem value="O/A Levels">O/A Levels</MenuItem>
                <MenuItem value="Islamic">Islamic</MenuItem>
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
                <MenuItem value="Semi-Government">Semi-Government</MenuItem>
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
                label="Contact Number"
                disabled={false}
                fullWidth
                name="contactnumber"
                type = "number"
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
                  onChange={handleChange2}
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
                name="lowerfeerange"
                label="Lower Fee range"
                id="select"
                select
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
                name="upperfeerange"
                label="Upper Fee range"
                id="select"
                select
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
                name="feedetails"
                label="Fee Details"
              />
            </Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Field
                component={TextField}
                label="Opening Timing"
                name="openingtiming"
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
                name="normaltiming"
                label="Normal Timing"
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
                name="fridaytiming"
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
                name="curriculum"
                label="Curriculum"
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
                startIcon={<Add />}
                disabled={loading}
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
