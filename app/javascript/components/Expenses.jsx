import React, { useState, useEffect } from 'react';

const Expenses = (props) => {
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

  return (
    <div>
      Hii
      {expensesArr.map(exp => (
        <div style="border: 1px solid black; margin: 15px;">
          <p>exp.name</p>
          <p>exp.budget_total</p>
          <p>exp.current_total</p>
        </div>
      ))}
    </div>
  );
};

export default Expenses;
