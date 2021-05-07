export const openModal = () => ({
  type: 'OPEN_MODAL',
  value: true
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
  value: false
});

export const postCategory = (form) => {
  const token = document.querySelector('meta[name="csrf-token"]').content;
  return (
    dispatch => {
      fetch('/categories', {
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
