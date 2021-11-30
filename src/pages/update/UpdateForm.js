import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';

export default function UpdateForm() {
  const params = useParams();
  const [user, setUser] = React.useState();
  const url = 'http://localhost:8081/update/student';

  async function getuser() {
    await axios
      .get(url)
      .then((res) => {
        setUser(res.data);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getuser();

  return (
    <div>
      <p>formulario de actualuzar</p>
    </div>
  );
}
