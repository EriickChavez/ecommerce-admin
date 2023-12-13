import {UserView} from '../Domain/Entity/User/User';

const defaultUser: UserView = {
  createdAt: Date.now().toString(),
  email: 'example@example.com',
  id: '0',
  token: '',
  username: 'NoName',
};

export {defaultUser};
