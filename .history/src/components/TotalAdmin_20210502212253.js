import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';



export default function TotalAdmin() {

  return (
    <React.Fragment>
      <Title>Total Admins</Title>
      <Typography  component="h1" variant="h2">
        3
      </Typography> 
      <Typography variant="h6" color="textSecondary">
        25 April, 2021
      </Typography>
    
    </React.Fragment>
  );
}