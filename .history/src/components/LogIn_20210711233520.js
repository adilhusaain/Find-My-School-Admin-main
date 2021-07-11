import React, { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Field, Formik, Form } from "formik";
import { TextField } from "formik-material-ui";
import firebase from 'firebase/app'
import 'firebase/firestore'
import AuthContext from '../context'
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import {IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const authContext = useContext(AuthContext)
  const [success, setSuccess] = useState("")

  async function login(value){
    const email =value.email;
    const password=value.password;
    const user = await firebase.firestore().collection('admins').where('email','==',email).get();
    console.log(value,'idr tk to agya ')
    user.forEach(doc => {
      if (doc.data().password == password) {
        authContext.setUser(JSON.stringify(doc.data(), null, 4))
        localStorage.setItem('users',JSON.stringify(doc.data(), null, 4))
      }
      else {
        setSuccess ("Your Message has been sent Successfully!")

      }
    });
  }
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {login(values)}}
    >
      {({ submitForm, isSubmitting }) => (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Find My School Admin
            </Typography>
            <Form className={classes.form} noValidate>
              <Field
                component={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Field
                component={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
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

            </Form>
          </div>
        </Container>
      )}
    </Formik>
  );
}
