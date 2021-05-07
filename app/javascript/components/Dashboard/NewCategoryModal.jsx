import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ColorOptions from '../Modal/ColorOptions';
import IconOptions from '../Modal/IconOptions';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Favorite from '@material-ui/icons/Favorite'
import styles from '../../useStyles/dashboardStyle';

const useStyles = makeStyles(styles);

const NewCategoryModal = (props) => {
  const classes = useStyles();
  const { isOpen, closeModal, postCategory, iconOptions, colorOptions } = props;
  const [ color, setColor ] = useState('primary');
  const [ icon, setIcon ] = useState('a');
  const [ input, setInput ] = useState({income: false});


  const handleChange = (e) => {
    e.persist();
    setInput(input => ({...input, [e.target.name]: e.target.value}));
  };

  const handleCheck = (e) => {
    setInput(input => ({...input, [e.target.name]: e.target.checked}));
  };
  
  const handleSubmit = () => {
    const remainingInfo = {
      // name: category,
      // budget_total: $,
      current_total: 0,
      color: color,
      icon: icon,
      // income: false,
    };
    const form = Object.assign(input, remainingInfo);
    postCategory(form);
    setColor('primary');
    setIcon('a');
    closeModal();
  };

  return (
    <Dialog open={isOpen} onClose={closeModal} disableBackdropClick aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add Category</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We will send updates
          occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Expense Category"
          type="text"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="budget_total"
          label="Total"
          type="number"
          fullWidth
          onChange={handleChange}
        />
        <ColorOptions color={color} setColor={setColor} colorOptions={colorOptions} />
        <IconOptions icon={icon} setIcon={setIcon} iconOptions={iconOptions} />
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                name="income"
                onChange={handleCheck}
              />
            }
            label="Source of Income"
          />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add Category
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewCategoryModal;

NewCategoryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
  postCategory: PropTypes.func.isRequired,
  iconOptions: PropTypes.object.isRequired,
  colorOptions: PropTypes.object.isRequired,
};
