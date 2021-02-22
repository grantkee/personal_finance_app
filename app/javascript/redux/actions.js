export const openModal = () => ({
  type: 'OPEN_MODAL',
  value: true
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
  value: false
});

export const addExpenseCat = (form) => ({
  type: 'ADD_EXPENSE_CAT',
  value: form
});
