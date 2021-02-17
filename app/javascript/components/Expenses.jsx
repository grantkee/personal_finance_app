import { useEventCallback } from '@material-ui/core';
import React, { useEffect } from 'react';

const Expenses = (props) => {
  useEffect(() => {
    const uri = '/expenses';
    fetch(uri)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Network response not ok.');
      })
      .then(res => console.log('res', res))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      Hii
    </div>
  );
};

export default Expenses;
