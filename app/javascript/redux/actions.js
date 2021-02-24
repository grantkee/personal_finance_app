export const openModal = () => ({
  type: 'OPEN_MODAL',
  value: true
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
  value: false
});

// export const addExpenseCat = (form) => ({
//   type: 'ADD_EXPENSE_CAT',
//   value: form
// });

export const postExpenseCat = (form) => {
  const token = document.querySelector('meta[name="csrf-token"]').content;
  return (
    dispatch => {
      fetch('/expenses/create', {
        method: 'POST',
        headers: {
          'X-CSRF-TOKEN': token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Network response not ok.');
      })
      .then(res => {
        const action = {
          type: 'ADD_EXPENSE_CAT',
          value: res.data,
        }
        dispatch(action);
      })
      .then(res => props.history.push(`/expenses/${res.id}`))
      .catch(err => console.log(err.message))
    }
  );
};

// export const login = (creds) => (
//   dispatch => {
//     fetch('/auth/login', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(creds)
//     })
//     .then(res => res.json())
//     .then(response => {
//       const action = {
//         type: 'LOGIN',
//         username: response.data.username,
//         value: true,
//       }
//       localStorage.setItem('token', response.accessToken);
//       dispatch(action);
//       // document.cookie = `token=${response.accessToken};`;
//     })
//     .catch(error => console.log('LOGIN ERROR:', error));
//   }
// );
