export const SaveLogin = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};
