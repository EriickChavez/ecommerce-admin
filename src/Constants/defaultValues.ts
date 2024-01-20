import {Product} from '../Domain/Entity';
import {UserView} from '../Domain/Entity/User/User';
import {Workshop} from '../Domain/Workshop/Workshop';

const defaultUser: UserView = {
  createdAt: Date.now().toString(),
  email: 'example@example.com',
  id: '0',
  token: '',
  username: 'NoName',
};

const defaultProduct: Product = {
  id: '-',
  userId: 'userIdTremendo',
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
  workshopId: '',
};

const defaultImage: {
  filename: string;
  uri: string;
} = {
  filename: '',
  uri: '',
};

const defaultWorkshop: Workshop = {
  id: '',
  name: 'store',
  description: 'create an store',
  imageUri: '',
  adminId: '',
  createdAt: Date.now().toString(),
};

export {defaultUser, defaultProduct, defaultImage, defaultWorkshop};
