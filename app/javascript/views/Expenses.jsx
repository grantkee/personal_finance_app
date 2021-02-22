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
    a: <HomeRoundedIcon />,
    b: <FavoriteRoundedIcon />,
    c: <AcUnitRoundedIcon />,
    d: <AirplanemodeActiveRoundedIcon />,
    e: <AttachFileRoundedIcon />,
    f: <FastfoodRoundedIcon />,
    g: <ShoppingCartRoundedIcon />,
  };

  return (
    <GridContainer>
      <GridItem>
        <IconButton color="primary" onClick={openModal} aria-label="add category">
          <LibraryAddIcon fontSize="large" />
        </IconButton>
        <h1>Add category</h1>
        <NewCategoryModal iconOptions={iconOptions} />
      </GridItem>

      {expensesArr.map(exp => (
        <GridItem key={exp.name} style={{border: "1px solid black", margin: "15px"}}>
          <p>{exp.name}</p>
          <p>{exp.budget_total}</p>
          <p>{exp.current_total}</p>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default Expenses;
