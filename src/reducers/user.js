import { LOGIN } from '../actions';

const INITIAL_STATE = { user: '' };

const user = (state = INITIAL_STATE, acition) => {
  switch (acition.type) {
  case LOGIN: {
    return {
      ...state,
      email: acition.payload,
    };
  }
  default: return state;
  }
};

export default user;
