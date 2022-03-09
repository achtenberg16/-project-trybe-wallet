import { CURRENCIES, EXPENSE_ADD,
  EXPENSE_DELETE, EXPENSE_EDIT,
  EXPENSE_ISEDITING, EXPENSE_SAVEEDITING, EXPENSE_GETSTORAGE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  nextExpenseID: 0,
  isEditing: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EXPENSE_DELETE: {
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };
  }
  case EXPENSE_ADD: {
    return {
      ...state,
      nextExpenseID: state.nextExpenseID + 1,
      expenses: [...state.expenses, { ...action.payload, id: state.nextExpenseID }],
    };
  }

  case EXPENSE_EDIT: {
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.payload.id) return { ...action.payload };
        return expense;
      }),
    };
  }
  case EXPENSE_SAVEEDITING: {
    return {
      ...state,
      expenses: state.expenses.map((expense) => ((expense.id === action.payload.id)
        ? action.payload : expense)),
      isEditing: false,
    };
  }
  case CURRENCIES: {
    return {
      ...state, currencies: action.payload,
    };
  }
  case EXPENSE_GETSTORAGE: {
    return {
      ...state,
      expenses: action.payload,
    };
  }
  case EXPENSE_ISEDITING: {
    return {
      ...state, isEditing: true,
    };
  }
  default: return state;
  }
};

export default wallet;
