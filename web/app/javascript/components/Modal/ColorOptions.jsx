import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import DoneIcon from '@material-ui/icons/Done';

import styles from '../../useStyles/Modal/colorOptionsStyle';

const useStyles = makeStyles(styles);

const ColorOptions = (props) => {
  const { color, setColor, colorOptions } = props;
  const classes = useStyles();
  const options = Object.keys(colorOptions);
  console.log('color options', options);
  console.log('color:', color);

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <h5>Color:</h5>
      <div className={classes.container}>
        {options.map((o, idx) => {
          return (
            <div key={o} className={`${classes.itemContainer} ${classes[o]}`}>
              <Radio
                key={o}
                className={`${classes[colorOptions[o]]} ${color === o ? classes.active : ''}`}
                checked={color === o}
                onChange={handleChange}
                value={idx}
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
