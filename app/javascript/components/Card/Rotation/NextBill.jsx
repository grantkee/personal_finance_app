import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import ReceiptIcon from '@material-ui/icons/Receipt';
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
        <QueryBuilderIcon className={classes.upArrowCardCategory} /> 3 days
      </span>{" "}
      until next bill.
    </p>
  );
};

export default ArrowBody;
