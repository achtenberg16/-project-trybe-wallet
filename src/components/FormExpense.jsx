import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';
import InputDescription from './InputDescription';
import InputValue from './InputValue';
import InputCurrency from './InputCurrency';
import InputMethod from './InputMethod';
import InputCategory from './InputCategory';
import { FetchValueCurrenciesAndDispatch, saveEditAction } from '../actions';
import TableExpenses from './TableExpenses';
import '../styles/formExpense.css';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Lazer',
};

export class FormExpense extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleEditClick = (newState) => {
    this.setState(newState);
  }

  handleSubmit = (e) => {
    const { AddExpense, saveEdit, isEditing } = this.props;
    e.preventDefault();
    if (isEditing) saveEdit(this.state);
    else AddExpense(this.state);
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { isEditing } = this.props;
    return (
      <>
        <h2>Cadastre uma despesa</h2>
        <form
          className="form-expense flex-row"
          type="subtmit"
          onSubmit={ this.handleSubmit }
        >
          <InputValue
            value={ value }
            onChange={ this.handleChange }
          />

          <InputCurrency
            value={ currency }
            onChange={ this.handleChange }
          />

          <InputMethod
            value={ method }
            onChange={ this.handleChange }
          />

          <InputCategory
            value={ tag }
            onChange={ this.handleChange }
          />

          <InputDescription
            value={ description }
            onChange={ this.handleChange }
          />

          <button
            className="save-btn"
            type="submit"
          >
            {
              (isEditing) ? 'Editar Despesa'
                : 'Adicionar despesa'
            }
          </button>
        </form>
        <TableExpenses editClick={ this.handleEditClick } />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  AddExpense: (data) => dispatch(FetchValueCurrenciesAndDispatch(data)),
  saveEdit: (data) => dispatch(saveEditAction(data)),
});

const mapStateToProps = ({ wallet: { isEditing } }) => ({
  isEditing,
});

FormExpense.propTypes = {
  AddExpense: func,
  isEditing: bool,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);
