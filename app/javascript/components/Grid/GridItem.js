import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  item: {
    padding: "0 10px !important"
  }
};

const useStyles = makeStyles(styles);

const GridItem = (props) => {
  const classes = useStyles();
  const { children, ...rest } = props;

  return (
    <Grid item {...rest} className={classes.item}>
      {children}
    </Grid>
  );
};

export default GridItem;

GridItem.propTypes = {
  children: PropTypes.node,
};
