import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDescription extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="value">
        Descrição:
        <input
          type="text"
          name="description"
          data-testid="description-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputDescription.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputDescription;
