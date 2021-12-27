import React, { Component } from 'react';
import Orders from '../pages/Orders.jsx';
import { Grid } from '@mui/material';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

class Dashboard extends Component {


  render() {
    return (
      <>
      <NavBar></NavBar>
      <div>
        <Grid container sx={{bgcolor:"red"}}>
            <h1>This is the dashboard</h1>
        </Grid>
   
        <Orders/>
      </div>
      <Footer/>
      </>
    )
  }
}

export default Dashboard;