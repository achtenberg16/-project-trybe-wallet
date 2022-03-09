import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import HedearTable from './HedearTable';
import { deleteExpenseAction, isEditing, setSavedExpenses } from '../actions/index';
import '../styles/table.css';
import { setLocalStorage } from '../services/localStorage';

export class TableExpenses extends Component {
  componentDidMount() {
    const { setExpensesFromStorage } = this.props;
    const storageExpenses = getLocalStorage('expenses') || false;
    if (storageExpenses) setExpensesFromStorage(storageExpenses);
  }

  componentDidUpdate() {
    const { expenses } = this.props;
    setLocalStorage(expenses);
  }

  getEditing = (id, expenses) => expenses.find((expense) => expense.id === id);

  render() {
    const { expenses, deleteExpense, isEditingFunc, editClick } = this.props;
    return (
      <table>
        <HedearTable />
        <tbody>
          {expenses.map((expense) => {
            const { value, description, currency,
              method, tag, exchangeRates, id } = expense;

            const exchange = exchangeRates[currency].name;
            const valueConverted = (+value * +exchangeRates[currency].ask).toFixed(2);
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{(+value).toFixed(2)}</td>
                <td>{exchange}</td>
                <td>{(+exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{valueConverted}</td>
                <td>Real</td>
                <td>
                  <button
                    className="edit-btn"
                    data-testid="edit-btn"
                    type="button"
                    onClick={ () => {
                      isEditingFunc(id);
                      editClick(this.getEditing(id, expenses));
                    } }
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    className="delete-btn"
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => { deleteExpense(id); } }
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

TableExpenses.propTypes = {
  expenses: PropTypes.array,
  deleteExpense: PropTypes.func,
  isEditing: PropTypes.func,
}.isRequired;

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(deleteExpenseAction(id)),
  isEditingFunc: (id) => dispatch(isEditing(id)),
  setExpensesFromStorage: (expenses) => dispatch(setSavedExpenses(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableExpenses);
