import React, { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import AirplanemodeActiveRoundedIcon from '@material-ui/icons/AirplanemodeActiveRounded';
import AttachFileRoundedIcon from '@material-ui/icons/AttachFileRounded';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
// local
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import NewCategoryModal from '../containers/Dashboard/NewCategoryModal';
import ExpenseCard from '../containers/Dashboard/ExpenseCard';

const Expenses = (props) => {
  const { openModal } = props;
  const [ expensesArr, setExpensesArr ] = useState([]);
  useEffect(() => {
    const uri = '/expenses';
    fetch(uri)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Network response not ok.');
      })
      .then(res => setExpensesArr(res))
      .catch(err => console.log(err))
  }, []);


  const iconOptions = {
    '0': <HomeRoundedIcon />,
    'd': <HomeRoundedIcon />,
    '1': <FavoriteRoundedIcon />,
    '2': <AcUnitRoundedIcon />,
    '3': <AirplanemodeActiveRoundedIcon />,
    '4': <AttachFileRoundedIcon />,
    '5': <FastfoodRoundedIcon />,
    '6': <ShoppingCartRoundedIcon />,
  };

  const colorOptions = {
    '0': 'primary',
    '1': 'warning',
    '2': 'danger',
    '3': 'info',
    '4': 'success',
    'success': 'success',
    '5': 'rose',
    '6': 'gray',
  };

  return (
    <GridContainer>
      <GridItem>
        <IconButton color="primary" onClick={openModal} aria-label="add category">
          <LibraryAddIcon fontSize="large" />
        </IconButton>
        <h1>Add category</h1>
        <NewCategoryModal iconOptions={iconOptions} colorOptions={colorOptions} />
      </GridItem>

      {expensesArr.map(exp => (
        <ExpenseCard key={exp.id} expense={exp} iconOptions={iconOptions} colorOptions={colorOptions} />
      ))}
    </GridContainer>
  );
};

export default Expenses;
