import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class InputCurrency extends Component {
  render() {
    const { currencies, value, onChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          name="currency"
          data-testid="currency-input"
          value={ value }
          onChange={ onChange }
          id="currency"
        >
          {currencies.map((element) => (
            <option
              key={ element }
              value={ element }
              data-testid={ element }
            >
              {element}

            </option>
          ))}
        </select>
      </label>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

InputCurrency.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(InputCurrency);
