
import {store} from '~store';


export const getToken = () => {
  const state = store.getState();
  const authToken = state.user.token;
  return authToken;
};
