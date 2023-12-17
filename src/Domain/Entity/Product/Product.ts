import {DISCOUNT_TYPE} from '../../../Enum/Types';
export interface Product {
  id: string;
  categoryId: string[];
  title: string;
  subtitle: string | undefined;
  price: number;
  imageUri: string | undefined;
  sellerId: string;
  /* FALTA POR AGREGAR COSAS */
  album: string[];
  userId: string;
  characteristics: Characteristics[];
  stock: number;
  cover?: string;
  discount?: Discount | undefined;
}

export interface Discount {
  name: string;
  amount: number;
  type: DISCOUNT_TYPE.FIXED | DISCOUNT_TYPE.PERCENTAGE;
}
export interface Characteristics {
  icon: string;
  title: string;
  description: string;
}

export interface ProductInput {
  id: string;
  userId: string;
  categoryId?: string[];
  title?: string;
  subtitle?: string | undefined;
  price?: number;
  imageUri?: string | undefined;
  sellerId?: string;
  /* FALTA POR AGREGAR COSAS */
  album?: string[];
  characteristics?: Characteristics[];
  stock?: number;
  cover?: string;
  discount?: Discount | undefined;
}
