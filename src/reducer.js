const defaultState = {
  pending: true,
  logged: false
};

export default (state = defaultState, action) => {
  if (action.type === 'GET_LOGGED_USER') {
    return Object.assign({}, state, {
      pending: false
    });
  }

  if (action.type === 'SET_LOGGED_USER') {
    return Object.assign({}, state, {
      pending: false,
      logged: action.logged
    });
  }

  return state;
};
