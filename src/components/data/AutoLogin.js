import axios from 'axios';

export const AutoLogin = async () => {
  const user = JSON.parse(window.localStorage.getItem('user')) || false;
  const data = [];
  if (!user) {
    return window.location.replace('login');
  } else {
    const url = `http://localhost:8081/admin/${user.id}`;
    await axios.get(url).then((response) => {
      data.push(response.data);
    });
  }
  return data[0];
};
