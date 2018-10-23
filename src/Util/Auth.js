import Cookies from 'js-cookie';

const createUser = (token, callback) => {
  Cookies.set('token', token);
}

const destroyUser = () => {
  Cookies.remove('token');
}

const getToken = () => {
  return Cookies.get('token');
}

const isAuthenticated = () => {
  let ret = false;
  const token = Cookies.get('token');
  if (token) ret = token.length > 10;
  return ret;
}

export {createUser, destroyUser, getToken, isAuthenticated};
