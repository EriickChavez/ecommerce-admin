export interface User extends UserInput {
  id: string;
  createdAt: string;
}
export interface UserInput {
  email: string;
  password: string;
  username: string;
}
export interface UserLogin {
  email: string;
  password: string;
}
export interface UserView {
  id: string;
  age?: number;
  email: string;
  username: string;
  country?: string;
  state?: string;
  bio?: string;
  imageUri?: string;
  token: string;
  createdAt: string;
}
export interface UserViewInput {
  id?: string;
  age?: number;
  username?: string;
  country?: string;
  state?: string;
  bio?: string;
  imageUri?: string;
}
