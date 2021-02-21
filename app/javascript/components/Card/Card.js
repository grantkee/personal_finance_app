import React from 'react';
// node library for concatenating classes
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../useStyles/Card/cardStyles';

const useStyles = makeStyles(styles);

const Card = (props) => {
  const classes = useStyles();
  const { className, children, plain, profile, chart, ...rest } = props;
  const cardClasses = classnames({
    [classes.card]: true,
    // [classes.cardPlain]: plain,
    // [classes.cardProfile]: profile,
    // [classes.cardChart]: chart,
    [className]: className !== undefined
  });

  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

export default Card;

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  chart: PropTypes.bool,
  children: PropTypes.node
};
