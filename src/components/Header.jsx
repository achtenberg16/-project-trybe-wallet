import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/header.css';

export class Header extends Component {
  render() {
    const { user, totalPrice } = this.props;
    return (
      <header className="flex-row">

        <p>
          Email:
          <span data-testid="email-field">
            {user}
          </span>
        </p>

        <p>
          Total de Despesas:
          <span
            data-testid="total-field"
            className="total-price"
          >
            {' R$ '}
            {totalPrice.reduce((acc, { value, currency, exchangeRates }) => (
              acc + (+value * +exchangeRates[currency].ask)
            ), 0).toFixed(2)}
          </span>

          <span data-testid="header-currency-field">
            {' '}
            BRL
          </span>
        </p>
      </header>
    );
  }
}

const mapStateToProps = ({ user, wallet: { expenses } }) => ({
  user: user.email || ' ',
  totalPrice: expenses,
});

Header.propTypes = {
  user: PropTypes.string,
  totalPrice: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Header);
