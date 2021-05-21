import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField, Button, MenuItem } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
 
  
}));

export default function AddInstitute() {
  const classes = useStyles();
  const [catagory, setCatagory] = React.useState('');
  const [rating, setRating]= React.useState('');

  const handleChange = (event) => {
    setCatagory(event.target.value);
  };

  const handleChangee = (e) => {
      setRating(e.target.value);
  }
  return (
   
      <form className={classes.root}>
        <Grid container spacing={3}
        justify="center"
        alignItems="center"
        >

        <Grid item xs={1}></Grid>
        <Grid item xs={4} >
        <TextField  label="Name" variant="outlined" fullWidth required />
        </Grid>
          <Grid item xs={2}></Grid>
        <Grid item xs={4}>
           <TextField id="select" label="Catagory" variant="outlined" value={catagory} onChange={handleChange} select fullWidth required>
            <MenuItem value="1">Matriculation</MenuItem>
            <MenuItem value="2">O/A Levels</MenuItem>
            <MenuItem value="3">Islamic</MenuItem>
            <MenuItem value="4">Primary</MenuItem>
           </TextField>
        </Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={4} >
        <TextField  label="City" variant="outlined" fullWidth required />
        </Grid>
          <Grid item xs={2}></Grid>
        <Grid item xs={4}>
           <TextField id="select" label="Rating" variant="outlined" onChange={handleChangee} value={rating} select fullWidth required>
            <MenuItem value="1">5</MenuItem>
            <MenuItem value="2">4</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">2</MenuItem>
            <MenuItem value="4">1</MenuItem>
           </TextField>
        </Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
           <TextField label="Address" variant="outlined" type="email" fullWidth required />
        </Grid>
        <Grid item xs={1}></Grid>
        
        <Grid item xs={1}></Grid>
        <Grid item xs={4} >
        <TextField  label="Location" variant="outlined" fullWidth required />
        </Grid>
          <Grid item xs={2}></Grid>
        <Grid item xs={4}>
           <TextField label="Contact" variant="outlined" type="email" fullWidth required />
        </Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={4} >
        <TextField 
         id="time"
         label="Opening Timing"
         type="time"
         defaultValue="07:30"
         variant="outlined"
         fullWidth
         InputLabelProps={{
           shrink: true,
         }}
         inputProps={{
           step: 300, // 5 min
         }} />
        </Grid>
          <Grid item xs={2}></Grid>
        <Grid item xs={4}>
           <TextField 
           id="time"
           label="Closing timing"
           type="time"
           defaultValue="17:30"
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

        <Grid item xs={7}></Grid>
        <Grid item xs={1}>
        <input accept="image/*"  id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      </Grid>
      <Grid item xs={1}></Grid>
        <Grid item xs={3}>
        <Button variant="contained" color="primary"  startIcon= { <Add /> }> Add Institute </Button>
        </Grid>
       

        </Grid>
      </form>
      
  );
}