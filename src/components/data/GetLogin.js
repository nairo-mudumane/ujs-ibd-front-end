import { AutoLogin } from './AutoLogin';

export async function getLogin() {
  await AutoLogin().then((data) => console.log(data));
}
