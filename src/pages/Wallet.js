import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormExpense from '../components/FormExpense';
import { currenciesAction } from '../actions';
import Header from '../components/Header';
import requestApi from '../services/API';

class Wallet extends React.Component {
  componentDidMount() {
    this.requestApiAndDispatch();
  }

  requestApiAndDispatch = async () => {
    const { addCurrencies } = this.props;
    const results = await requestApi();
    const keys = Object.keys(results);
    addCurrencies(keys);
  }

  render() {
    return (
      <>
        <Header />
        <FormExpense />
      </>
    );
  }
}

Wallet.propTypes = {
  addCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addCurrencies: (currencies) => dispatch(currenciesAction(currencies)),
});

export default connect(null, mapDispatchToProps)(Wallet);
