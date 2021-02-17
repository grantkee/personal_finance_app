import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReceiptIcon from '@material-ui/icons/Receipt';
import styles from '../../../assets/jss/dashboard/views/dashboardStyle';

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
        <ReceiptIcon className={classes.upArrowCardCategory} />Payday
      </span>{" "}
      this Friday.
    </p>
  );
};

export default ArrowBody;
