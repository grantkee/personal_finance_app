import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import useStyles from '../../useStyles/LandingPage';

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography align="center" variant="h1">
            Personal Finance
          </Typography>
          <Typography align="center" variant="body1">
            Good judgement comes from experience. Experience comes from bad judgement.
          </Typography>
          <Divider />
        </Grid>
        <Grid container item xs={12} justify="center">
          <Grid item xs={3}>
            <Link
              to="/expenses"
              className={classes.btnOne}
              role="button"
            >
              My Finances
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
