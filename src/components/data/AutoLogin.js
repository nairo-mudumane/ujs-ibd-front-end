import axios from 'axios';

export const AutoLogin = async () => {
  const user = JSON.parse(window.localStorage.getItem('user')) || false;
  const url = 'http://localhost:8081/admin/login';
  console.log(user);
  await axios
    .post(url, user)
    .then((response) => {
      if (!response.data.error) {
        return window.location.replace('/')(response.data);
      }
    })
    .catch((err) => {
      return window.location.replace('login');
    });
};
