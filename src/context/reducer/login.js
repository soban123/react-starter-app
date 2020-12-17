export function login(state, action) {
  switch (action.type) {
    case "login":
      return { login: true };
    case "logout":
      return { login: false };
    default:
      return state;
  }
}
