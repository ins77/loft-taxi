export const getAuth = state => state.auth;
export const getSignIn = state => getAuth(state).signIn;
export const getSignUp = state => getAuth(state).signUp;
