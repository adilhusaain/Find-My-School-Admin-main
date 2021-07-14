import {  Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Chart from '../components/Chart';
import clsx from 'clsx';
import TotalUser from '../components/TotalUser';
import Container from '@material-ui/core/Container';
import TotalAdmin from '../components/TotalAdmin';
import TotalInstitutes from '../components/TotalInstitutes';
import React, { useEffect, useState } from 'react'
import  firebase from "firebase" 
import "firebase/firestore"

export default function Dashboard() {
 
const useStyles = makeStyles((theme) => ({
    root: {
      
        marginTop: theme.spacing(2),
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        
      },
      fixedHeight: {
        height: 100,
      },
      roo: {
        display: 'flex',
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        
      },
  }));

  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
 <Container maxWidth="lg" className={classes.container}>
<Grid container spacing={4}>
       
            <Grid item xs={3} >
              <Paper className={classes.paper}>
                
             
            <TotalUser />

              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3} >
              <Paper className={classes.paper}>
                
             
            <TotalAdmin />

              </Paper>
            </Grid>

            
            <Grid item xs={1}></Grid>
            <Grid item xs={3} >
              <Paper className={classes.paper}>
                
             
            <TotalInstitutes />

              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>


          </Grid>
          </Container>

        </div>
    )
        
     
}


