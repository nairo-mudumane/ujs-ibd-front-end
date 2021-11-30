export const SaveLogin = (user) => {
  localStorage.removeItem('user');
  localStorage.setItem('user', JSON.stringify(user));
};
