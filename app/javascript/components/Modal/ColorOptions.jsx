import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import DoneIcon from '@material-ui/icons/Done';

import styles from '../../useStyles/Modal/colorOptionsStyle';

const useStyles = makeStyles(styles);

const ColorOptions = (props) => {
  const { color, setColor } = props;
  const classes = useStyles();
  const options = [
    'primary',
    'warning',
    'danger',
    'info',
    'success',
    'rose',
    'gray'
  ];

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
    <h5>Color:</h5>
    <div className={classes.container}>
      {options.map(o => {
        return (
          <div key={o} className={`${classes.itemContainer} ${classes[o]}`}>
            <Radio
              key={o}
              className={`${classes.badge} ${classes[o]} ${color === o ? classes.active : ''}`}
              checked={color === o}
              onChange={handleChange}
              value={o}
              color="default"
              checkedIcon={<DoneIcon />}
            />
          </div>
        )
      })}
    </div>
    </>
  );
};

export default ColorOptions;
