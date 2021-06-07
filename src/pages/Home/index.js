import React from 'react';
import { Grid } from '@material-ui/core';
import Navbar from '../../components/Navbar';
import GridContainer from '../../components/GridContainer';
import { MainPadding } from './styles';

const Home = () => {
  return (
    <>
      <Navbar />
      <MainPadding>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} wrap='nowrap'>
            <GridContainer />
          </Grid>
          <Grid item xs={12} sm={3} wrap='nowrap'>
            <GridContainer />
          </Grid>
          <Grid item xs={12} sm={3} wrap='nowrap'>
            <GridContainer />
          </Grid>
          <Grid item xs={12} sm={3} wrap='nowrap'>
            <GridContainer />
          </Grid>
          <Grid item xs={12} sm={3} wrap='nowrap'>
            <GridContainer />
          </Grid>
        </Grid>
      </MainPadding>
    </>
  );
};

export default Home;
