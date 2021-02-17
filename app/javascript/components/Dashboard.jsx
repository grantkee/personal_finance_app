import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const Dashboard = () => (
  <div className="homepage-container">
    <div className="jumbotron">
      <Typography align="center" variant="h1">
        Personal Finance
      </Typography>
      <Typography align="center" variant="body1">
        Good judgement comes from experience. Experience comes from bad judgement.
      </Typography>
    </div>
  </div>
);

export default Dashboard;
