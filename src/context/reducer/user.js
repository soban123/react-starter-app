export function user(state, action) {
  switch (action.type) {
    case "LOGIN":
      const { userData, token } = action.payload;
      return { ...state, userData, token, login: true };
    case "LOGOUT":
      return { ...state, userData: {}, token: "", login: false };
    default:
      return state;
  }
}
