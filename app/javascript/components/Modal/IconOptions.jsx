import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

import styles from '../../assets/jss/dashboard/components/iconOptionsStyle';

const useStyles = makeStyles(styles);

const IconOptions = (props) => {
  const { icon, setIcon, iconOptions } = props;
  const classes = useStyles();
  const options = Object.keys(iconOptions);
  const handleChange = (e) => {
    setIcon(e.target.value);
  };

  return (
    <>
    <h5>Icon:</h5>
      <div className={classes.container}>
        {options.map(o => {
          return (
            <div key={o} className={`${classes.itemContainer} ${classes[o]}`}>
              <Radio
                key={o}
                className={`${classes.badge} ${classes[o]} ${icon === o ? classes.active : ''}`}
                checked={icon === o}
                onChange={handleChange}
                value={o}
                color="default"
                icon={iconOptions[o]}
                checkedIcon={iconOptions[o]}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default IconOptions;
