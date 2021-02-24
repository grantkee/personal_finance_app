import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import styles from '../../../useStyles/dashboardStyle';

const useStyles = makeStyles(styles);

const ArrowBody = (props) => {
  const classes = useStyles();
  const { color } = props;

  const textColor = {
    primary: classes.primaryText,
    warning: classes.warningText,
    danger: classes.dangerText,
    info: classes.infoText,
    success: classes.successText,
  };

  return (
    <p className={classes.cardCategory}>
      <span className={textColor[color]}>
        <ArrowUpward className={classes.upArrowCardCategory} /> 65%
      </span>{" "}
      increase in spending today.
    </p>
  );
};

export default ArrowBody;
