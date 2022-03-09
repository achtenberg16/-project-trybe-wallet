import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../actions';
import '../styles/login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      password: '',
      buttonDisabled: true,
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value }, this.validateUserAndPassword);
  }

  validateUserAndPassword = () => {
    const { user, password } = this.state;
    const minSizePassword = 5;
    const passwordCondicion = password.length > minSizePassword;
    const emailCondition = /^\S+@\S+\.\S+$/.test(user);

    this.setState({ buttonDisabled: !(passwordCondicion && emailCondition) });
  }

  handleClickSubmit = (event) => {
    const { user } = this.state;
    const { history, sendUser } = this.props;
    event.preventDefault();
    sendUser(user);
    history.push('/carteira');
  }

  render() {
    const { buttonDisabled, user, password } = this.state;
    return (
      <form className="login-form flex-collumn">
        <input
          value={ user }
          name="user"
          type="email"
          className="login-input"
          data-testid="email-input"
          onChange={ this.handleChange }
          placeholder="email ex: teste@email.com"
        />

        <input
          value={ password }
          name="password"
          type="password"
          placeholder="password"
          className="login-input"
          data-testid="password-input"
          onChange={ this.handleChange }
        />

        <button
          disabled={ buttonDisabled }
          type="button"
          onClick={ this.handleClickSubmit }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  sendUser: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendUser: (user) => dispatch(loginAction(user)),
});

export default connect(null, mapDispatchToProps)(Login);
