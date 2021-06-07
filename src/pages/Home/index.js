import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import api from '../../services/api';
import GridContainer from '../../components/GridContainer';
import { MainPadding } from './styles';

const Home = () => {
  const [info, setInfo] = useState('');
  const url = 'http://localhost:8080';
  let content = null;

  useEffect(() => {
    api
      .get('http://localhost:8080/api/cars')
      .then((res) => {
        console.log(res.data);
        setInfo(res.data);
      })
      .catch((error) => console.log(`Error ${error}`));
  }, [url]);

  if (info) {
    content = (
      <>
        <MainPadding>
          <Grid container spacing={3}>
            <GridContainer name={info[0].nome} price={info[0].preco} />
            <GridContainer name={info[1].nome} price={info[1].preco} />
            <GridContainer name={info[3].nome} price={info[3].preco} />
          </Grid>
        </MainPadding>
      </>
    );
  }
  return <div>{content}</div>;
};

export default Home;
