import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import styles from '../../../assets/jss/dashboard/components/cardBodyStyle';
import ArrowBody from './Rotation/ArrowBody';
import NextBill from './Rotation/NextBill';
import NextPaycheck from './Rotation/NextPaycheck';

const useStyles = makeStyles(styles);

const CardCarousel = (props) => {
  const classes = useStyles();
  // const { className, children, plain, profile, ...rest } = props;
  // const cardBodyClasses = classNames({
  //   [classes.cardBody]: true,
  //   [classes.cardBodyPlain]: plain,
  //   [classes.cardBodyProfile]: profile,
  //   [className]: className !== undefined
  // });

  const { color } = props;
  const [rotation, setRotation] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setRotation(rotation + 1);
    }, 5*1000);
  }, [rotation]);

  const rotateContent = () => {
    const num = rotation % 3;
    switch(num) {
      case 0:
        return <ArrowBody color={color} />;
      case 1:
        return <NextBill color={color} />;
      case 2:
        return <NextPaycheck color={color} />;
      default:
        <p>Something Went Wrong??</p>
    }
  };

  return (
    <>
      {rotateContent()}
    </>
  );
};

CardCarousel.propTypes = {
  color: PropTypes.string,
};

export default CardCarousel;
