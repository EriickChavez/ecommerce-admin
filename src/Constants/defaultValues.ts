import {Product} from '../Domain/Entity';
import {UserView} from '../Domain/Entity/User/User';

const defaultUser: UserView = {
  createdAt: Date.now().toString(),
  email: 'example@example.com',
  id: '0',
  token: '',
  username: 'NoName',
};

const defaultProduct: Product = {
  id: '-',
  categoryId: [],
  cover: '',
  title: '',
  subtitle: undefined,
  price: 0.0,
  imageUri: undefined,
  album: [],
  characteristics: [],
  stock: 0,
  sellerId: '',
  discount: undefined,
};

const defaultImage: {
  filename: string;
  uri: string;
} = {
  filename: '',
  uri: '',
};
export {defaultUser, defaultProduct, defaultImage};
