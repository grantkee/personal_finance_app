const mongoDB = {
  id: 33,
  userInfo: {
    firstName: 'grant',
    lastName: 'kee',
    email: 'grant@kee.com',
  },
  expenses: [
    {
      id: 0,
      distributionId: 'utilities', // toLowerCase() & strip any special characters
      categoryName: 'Utilities',
      total: '650.00',
      current: '333.33',
      color: 'success',
      icon: 'a',
      createdAt: 1609695821,
      lastUpdated: 1609795821,
      history: [
        {
          id: 0,
          amount: '100.00',
          time: 1609695821,
        },
        {
          id: 1,
          amount: '100.00',
          time: 1609695821,
        },
      ]
    },
    {
      id: 1,
      distributionId: 'gas', 
      categoryName: 'Gas',
      total: '150.00',
      current: '0.00',
      color: 'success',
      icon: 'b',
      createdAt: 1609605821,
      lastUpdated: 1609775821,
      history: [
        {
          id: 0,
          amount: '100.00',
          time: 1609605821,
        },
        {
          id: 1,
          amount: '100.00',
          time: 1609605821,
        },
      ]
    },
    {
      id: 2,
      distributionId: 'savings', // have a button that the user checks in the modal indicating if the category is savings. if true, set the 'distributionId' to savings so the user can still name their savings anything they want - when adding a savings category, look at other expense categories for this distributionId, if it exists, add 1 to it ex) savings, savings1, savings2
      categoryName: 'Savings',
      total: '150.00',
      current: '0.00',
      color: 'success',
      icon: 'b',
      createdAt: 1609605821,
      lastUpdated: 1609775821,
      history: [
        {
          id: 0,
          amount: '100.00',
          time: 1609605821,
        },
        {
          id: 1,
          amount: '100.00',
          time: 1609605821,
        },
      ],
    }
  ],
  incomeHistory: [
    {
      id: 0,
      amount: '1500.00',
      dateAdded: 1609805821,
      expenseDistribution: { // take away from 'current' to give the user "how much money they have left to spend on that expense"
        utilities: '325.00',
        gas: '75.00',
      }
    }
  ],
  repeatingIncome: {
    repeats: true,
    amount: '1500.00',
    frequency: 'bimonthly',
    nextPayment: 'how do we handle this? timestamp that checks each time the user logs on? if the timestamp is less than the current time, distribute the income, and update this value'
  }
};

export default mongoDB;
