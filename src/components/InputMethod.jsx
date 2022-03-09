import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputMethod extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="method">
        Método De pagamento:
        <select
          name="method"
          value={ value }
          onChange={ onChange }
          data-testid="method-input"
          id="method"
        >
          <option value="Dinheiro">Dinheiro</option>

          <option value="Cartão de crédito">Cartão de crédito</option>

          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

InputMethod.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputMethod;
