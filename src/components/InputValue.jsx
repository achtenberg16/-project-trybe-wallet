import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class InputValue extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="number"
          name="value"
          data-testid="value-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputValue.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputValue;
