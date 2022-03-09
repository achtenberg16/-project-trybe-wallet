import requestApi from '../services/API';

export const LOGIN = '@user/LOGIN';
export const CURRENCIES = '@wallet/addcurrencies';
export const EXPENSE_ADD = '@wallet/addExpense';
export const EXPENSE_DELETE = '@wallet/deleteExpense';
export const EXPENSE_EDIT = '@wallet/editExpense';
export const EXPENSE_ISEDITING = '@wallet/isEditing';
export const EXPENSE_SAVEEDITING = '@wallet/saveEditing';
export const EXPENSE_GETSTORAGE = '@wallet/getExpenses';

export const isEditing = (id) => ({
  type: EXPENSE_ISEDITING,
  payload: id,
});

export const saveEditAction = (payload) => ({
  type: EXPENSE_SAVEEDITING,
  payload,
});

export const deleteExpenseAction = (payload) => ({
  type: EXPENSE_DELETE,
  payload,
});

export const addExpense = (payload) => ({
  type: EXPENSE_ADD,
  payload,
});

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

export const currenciesAction = (payload) => ({
  type: CURRENCIES,
  payload,
});

export const FetchValueCurrenciesAndDispatch = (data) => async (dispatch) => {
  const result = await requestApi();
  data.exchangeRates = result;
  dispatch(addExpense(data));
};

export const setSavedExpenses = (expenses) => ({
  type: EXPENSE_GETSTORAGE,
  payload: expenses,
});
