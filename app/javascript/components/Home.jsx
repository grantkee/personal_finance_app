import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const Home = () => (
  <Grid container justify="center" alignItems="center" xs={6}>
    <Grid item xs={12}>
      <Typography align="center" variant="h1">
        Personal Finance
      </Typography>
      <Typography align="center" variant="body1">
        Good judgement comes from experience. Experience comes from bad judgement.
      </Typography>
      <Divider />
    </Grid>
    <Grid item xs={12}>
      <Link
        to="/dashboard"
        className="btn btn-lg custom-button"
        role="button"
      >
        My Finances
      </Link>
    </Grid>
  </Grid>
);

export default Home;
