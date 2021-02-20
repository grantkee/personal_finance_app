import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import styles from '../../useStyles/Grid/Grid';

const useStyles = makeStyles(styles);

const GridContainer = (props) => {
  const classes = useStyles();
  const { children, ...rest } = props;

  return (
    <Grid container {...rest} className={classes.container}>
      {children}
    </Grid>
  );
};

export default GridContainer;

GridContainer.propTypes = {
  children: PropTypes.node,
};
