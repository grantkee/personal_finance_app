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

//TODO
// import styles from '../../assets/jss/dashboard/components/cardStyles';
// const useStyles = makeStyles(styles);

const NewCategoryModal = (props) => {
  const { isOpen, closeModal, expenseCategories, addExpenseCat, iconOptions } = props;
  // const [ category, setCategory ] = useState('');
  // const [ total, setTotal ] = useState('');
  const [ color, setColor ] = useState('primary');
  const [ icon, setIcon ] =useState('a');
  // const [ icon, setIcon ] = useState(0);
  // const [ time, setTime ] = useState(0);
  const [ input, setInput ] = useState({});
  const categoryId = expenseCategories.length + 1;

  const handleChange = (e) => {
    e.persist();
    setInput(input => ({...input, [e.target.name]: e.target.value}));
  }
  
  const handleSubmit = () => {
    // setTime(Date.now());
    const remainingInfo = {
      id: categoryId,
      user_id: 33,
      // category: category,
      // total: total,
      color: color,
      current: '0',
      icon: icon,
      createdAt: Date.now(),
      lastUpdated: Date.now(),
    };
    const form = Object.assign(input, remainingInfo);
    addExpenseCat(form);
    setColor('primary');
    setIcon('a');
    closeModal();
  };

  console.log('color in modal parent', color);

  return (
    <Dialog open={isOpen} onClose={closeModal} disableBackdropClick aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We will send updates
          occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          name="category"
          label="Expense Category"
          type="text"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="total"
          label="Total"
          type="number"
          fullWidth
          onChange={handleChange}
        />
        {/* <TextField
          margin="dense"
          name="color"
          label="color"
          type="text"
          fullWidth
          onChange={handleChange}
        /> */}
        <ColorOptions color={color} setColor={setColor} />
        <IconOptions icon={icon} setIcon={setIcon} iconOptions={iconOptions} />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewCategoryModal;

NewCategoryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
};
